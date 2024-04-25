
"use client"
import React, { useEffect, useState, useCallback } from 'react';

const WelcomeSection: React.FC = () => {
  const scaleStart = 0.5;
  const scaleEnd = 2.5;
  const translateYStart = 0;
  const scaleIncreaseRate = 0.01;
  const [scale, setScale] = useState<number>(scaleStart);
  const [isFullScale, setIsFullScale] = useState<boolean>(false);
  const [textColor, setTextColor] = useState<string>('#32ABBC');
  const [lastTouchY, setLastTouchY] = useState<number | null>(null);  // Track the last Y position on touch start
  const [atTopOfPage, setAtTopOfPage] = useState<boolean>(true); // Track if user is at the top of the page

  const handleInteraction = useCallback((deltaY: number) => {
    const scrollDelta = Math.abs(deltaY);
    const scrollDown = deltaY > 0;

    if (scrollDown) {
      if (!isFullScale) {
        const newScale = Math.min(scale + scaleIncreaseRate * scrollDelta, scaleEnd);
        setScale(newScale);
        if (newScale === scaleEnd) {
          setIsFullScale(true);
        }
        return true;  // Prevent default to avoid scrolling the page
      }
    } else {
      if ((atTopOfPage && scale > scaleStart) || scale > scaleStart) {
        const newScale = Math.max(scale - scaleIncreaseRate * scrollDelta, scaleStart);
        setScale(newScale);
        if (newScale === scaleStart) {
          setIsFullScale(false);
        }
        return true;  // Prevent default to avoid scrolling the page
      }
    }
    return false;  // Allow default behavior (page scrolling)
  }, [scale, isFullScale, scaleStart, scaleEnd, scaleIncreaseRate, atTopOfPage]);

  const handleScroll = useCallback((event: WheelEvent) => {
    if (!isFullScale && handleInteraction(event.deltaY)) {
      event.preventDefault();
    }
  }, [handleInteraction, isFullScale]);

  const handleTouchStart = useCallback((event: TouchEvent) => {
    setLastTouchY(event.touches[0].clientY);
  }, []);

  const handleTouchMove = useCallback((event: TouchEvent) => {
    if (!isFullScale && lastTouchY !== null) {
      const touchY = event.touches[0].clientY;
      const deltaY = lastTouchY - touchY;
      if (handleInteraction(deltaY)) {
        event.preventDefault();
      }
      setLastTouchY(touchY);
    }
  }, [lastTouchY, handleInteraction, isFullScale]);

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('scroll', () => {
      const atTop = window.scrollY === 0;
      setAtTopOfPage(atTop);
      if (atTop && scale < scaleStart) {
        setScale(scaleStart);
        setIsFullScale(false);
      }
    });

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('scroll', () => {
        const atTop = window.scrollY === 0;
        setAtTopOfPage(atTop);
        if (atTop && scale < scaleStart) {
          setScale(scaleStart);
          setIsFullScale(false);
        }
      });
    };
  }, [handleScroll, handleTouchStart, handleTouchMove, scale, scaleStart]);

  const ellipsisStyle = {
    transform: `scale(${scale}) translateY(${translateYStart}px)`,
    transition: 'transform 0.5s ease-out'
  };

  useEffect(() => {
    const coversText = scale > 1.2;
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
