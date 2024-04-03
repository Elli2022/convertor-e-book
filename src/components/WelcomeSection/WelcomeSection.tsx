"use client"
import React, { useEffect, useState } from 'react';

const WelcomeSection = () => {
  const scaleStart = 0.5; // Startskala
  const scaleEnd = 2.5; // Mål för skala
  const translateYStart = 0; // Startposition för translateY
  const scaleIncreaseRate = 0.001; // Takt på skalningsökning per pixel scrollad
  const [scale, setScale] = useState(scaleStart);
  const [translateY, setTranslateY] = useState(translateYStart);
  const [isFullScale, setIsFullScale] = useState(false); // Spåra när full skala nås


  // Uppdaterad state för textfärg
  const [textColor, setTextColor] = useState('#32ABBC');

  const handleScroll = (event:any) => {
    const scrollDown = event.deltaY > 0;
    if (scrollDown) {
      if (!isFullScale) {
        event.preventDefault(); // Förhindra faktisk scroll
        // Förstora tills full skala
        const newScale = Math.min(scale + scaleIncreaseRate * event.deltaY, scaleEnd);
        setScale(newScale);
        if (newScale === scaleEnd) {
          setIsFullScale(true);
        }
      } else {
        // Flytta neråt efter full skala
        setTranslateY(prevY => prevY + event.deltaY);
      }
    } else {
      // När vi scrollar uppåt
      if (translateY > translateYStart) {
      
        // Rör sig uppåt till startpositionen
        const newY = Math.max(translateYStart, translateY - Math.abs(event.deltaY));
        setTranslateY(newY);
        if (newY === translateYStart && scale === scaleEnd) {
          // Börja minska storleken när den når startpositionen och är fullskalig
          setIsFullScale(false);
        }
      } else if (scale > scaleStart) {
       
        // Minska storleken till startskalan
        const newScale = Math.max(scaleStart, scale - scaleIncreaseRate * Math.abs(event.deltaY));
        setScale(newScale);
        if (newScale === scaleStart) {
          // Återställ flaggor om nödvändigt
        }
      }
    }
  };

  const checkIfEllipsisCoversText = () => {
    // Lägg till logik här för att bestämma om ellipsen täcker texten,
    // baserat på scale och translateY värdena. Detta är ett exempelvillkor:
    return scale > 1.2 && translateY < 100;
  };
  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [scale, translateY, isFullScale]);

  const ellipsisStyle = {
    transform: `scale(${scale}) translateY(${translateY}px)`,
  };

  useEffect(() => {
    const coversText = checkIfEllipsisCoversText();
    setTextColor(coversText ? 'white' : '#32ABBC');
  }, [scale, translateY]);

  return (
    <>
      <section className="text-center w-full relative overflow-hidden flex items-center justify-center" style={{ background: '#D3E0E5', height: '503px' }}>
        <div style={ellipsisStyle} className="absolute top-1/3 w-32 h-32 bg-[#32ABBC] rounded-full z-0" />
        <div className="z-10 relative max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-century-gothic-pro text-black">Välkommen till</h1>
          <div className="mt-2 text-lg md:text-xl lg:text-3xl font-bold font-century-gothic-pro text-black">en byrå fylld av passionerade,</div>
          {/* Uppdaterad textfärg baserad på ellipsens position och skala */}
          <div className={`text-lg md:text-xl lg:text-3xl font-bold font-century-gothic-pro`} style={{ color: textColor }}>
            prestigelösa och resultatdrivna doers.
          </div>
        </div>
      </section>
    </>
  );
};

export default WelcomeSection;
