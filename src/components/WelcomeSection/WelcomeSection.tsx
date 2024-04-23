"use client"
import React, { useEffect, useState } from 'react';

const WelcomeSection = () => {
  const scaleStart = 0.5;  // Start scale
  const scaleEnd = 2.5;    // End scale
  const translateYStart = 0; // Initial translateY position (unused)
  const scaleIncreaseRate = 0.01; // Increased rate of scaling per pixel scrolled
  const [scale, setScale] = useState(scaleStart);
  const [isFullScale, setIsFullScale] = useState(false);
  const [lastTouchY, setLastTouchY] = useState(0);
  const [textColor, setTextColor] = useState('#32ABBC'); // State for text color

  const handleTouchStart = (event:any) => {
    setLastTouchY(event.touches[0].clientY);
  };

  const handleScroll = (event:any) => {
    let scrollDelta = 0;
    const isTouch = event.type === 'touchmove';
    
    if (isTouch) {
      const currentTouchY = event.touches[0].clientY;
      scrollDelta = lastTouchY - currentTouchY;
      setLastTouchY(currentTouchY);
    } else {
      scrollDelta = event.deltaY;
    }

    const scrollDown = scrollDelta > 0;

    if (scrollDown) {
      if (!isFullScale) {
        event.preventDefault();
        const newScale = Math.min(scale + scaleIncreaseRate * Math.abs(scrollDelta), scaleEnd);
        setScale(newScale);
        if (newScale >= scaleEnd) {
          setTimeout(() => setIsFullScale(true), 500);
        }
      }
    } else {
      if (!isFullScale || window.scrollY === 0) {
        event.preventDefault();
        const newScale = Math.max(scaleStart, scale - scaleIncreaseRate * Math.abs(scrollDelta));
        setScale(newScale);
        if (newScale <= scaleStart) {
          setIsFullScale(false);
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('touchmove', handleScroll, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, [scale, isFullScale]);

  const ellipsisStyle = {
    transform: `scale(${scale}) translateY(${translateYStart}px)`,
    transition: 'transform 0.5s ease-out',
  };

  useEffect(() => {
    const coversText = scale > 1.2; // Adjust text color based on scale
    setTextColor(coversText ? 'white' : '#32ABBC');
  }, [scale]);

  return (
    <>
      <section className="text-center w-full relative overflow-hidden flex items-center justify-center" style={{ background: '#D3E0E5', height: '503px' }}>
        <div style={ellipsisStyle} className="absolute top-1/3 w-32 h-32 bg-[#32ABBC] rounded-full z-0" />
        <div className="z-10 relative max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-century-gothic-pro text-black">Välkommen till</h1>
          <div className="mt-2 text-lg md:text-xl lg:text-3xl font-bold font-century-gothic-pro text-black">en byrå fylld av passionerade,</div>
          <div className={`text-lg md:text-xl lg:text-3xl font-bold font-century-gothic-pro`} style={{ color: textColor }}>
            <span style={{ color: 'black' }}>prestigelösa och </span>
            resultatdrivna doers.
          </div>
        </div>
      </section>
    </>
  );
};

export default WelcomeSection;
