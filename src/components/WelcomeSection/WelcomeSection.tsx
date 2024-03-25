"use client"
import React, { useEffect, useState } from 'react';

const WelcomeSection = () => {
  const scaleStart = 0.5; // Startskala
  const scaleEnd = 1.0; // Mål för skala
  const scaleIncreaseRate = 0.001; // Takt på skalningsökning per pixel scrollad
  const [scale, setScale] = useState(scaleStart);
  const [translateY, setTranslateY] = useState(0);
  const [isFullScale, setIsFullScale] = useState(false); // Ny state för att spåra när full skala nås

  const handleScroll = (event) => {
    if (!isFullScale) {
      event.preventDefault(); // Förhindra scroll tills full skala nås

      // Beräkna ny skala
      const newScale = Math.min(scale + scaleIncreaseRate * event.deltaY, scaleEnd);
      setScale(newScale);

      // Om skalan når sitt max, tillåt normal scroll och börja flytta ellipsen
      if (newScale === scaleEnd) {
        setIsFullScale(true);
        // Här kan du eventuellt ta bort event listener om du inte vill ha fler skalningsjusteringar
        // window.removeEventListener('wheel', handleScroll);
      }
    } else {
      // När full skala har nåtts, justera ellipsens Y-position baserat på scroll
      const deltaY = event.deltaY;
      setTranslateY((prevY) => prevY + deltaY);
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => window.removeEventListener('wheel', handleScroll);
  }, [scale, isFullScale]); // Uppdatera dependencies för att inkludera isFullScale

  const ellipsisStyle = {
    transform: `scale(${scale}) translateY(${translateY}px)`,
  };

  return (
    <>
      <section className="text-center w-full relative overflow-hidden flex items-center justify-center" style={{ background: '#D3E0E5', height: '503px' }}>
        <div style={ellipsisStyle} className="absolute top-1/3 w-32 h-32 bg-[#32ABBC] rounded-full z-0" />
        <div className="z-10 relative max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-century-gothic-pro text-black">Välkommen till</h1>
          <div className="mt-2 text-lg md:text-xl lg:text-3xl font-bold font-century-gothic-pro text-black">en byrå fylld av passionerade,</div>
          <div className="text-lg md:text-xl lg:text-3xl font-bold font-century-gothic-pro" style={{ color: '#32ABBC' }}>prestigelösa och resultatdrivna doers.</div>
        </div>
      </section>
    </>
  );
};

export default WelcomeSection;
