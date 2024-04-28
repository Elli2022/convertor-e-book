"use client"
import React, { useEffect, useState, useCallback } from 'react';

const WelcomeSection: React.FC = () => {
  const scaleStart: number = 0.5;
  const scaleEnd: number = 3.5;
  const translateYStart: number = 0;
  const scaleIncreaseRate: number = 0.01;
  const [scale, setScale] = useState<number>(scaleStart);
  const [isFullScale, setIsFullScale] = useState<boolean>(false);
  const [lastTouchY, setLastTouchY] = useState<number | null>(null);
  const [textColor, setTextColor] = useState<string>('#32ABBC');

  const handleInteraction = useCallback((deltaY: number, isTouch: boolean = false): void => {
    const scrollDelta: number = Math.abs(deltaY) * (isTouch ? 2 : 50);
    const scrollDown: boolean = deltaY > 0;

    let newScale: number = scale;
    if (scrollDown) {
      if (scale < scaleEnd) {
        newScale = Math.min(scale + scaleIncreaseRate * scrollDelta, scaleEnd);
        setScale(newScale);
        if (newScale >= scaleEnd) {
          // Introduce a shorter delay before allowing natural scrolling
          setTimeout(() => {
            setIsFullScale(true);
          }, 500); // Delay in milliseconds, adjust as needed
        }
      }
    } else {
      if (window.scrollY === 0 && scale > scaleStart) {
        newScale = Math.max(scale - scaleIncreaseRate * scrollDelta, scaleStart);
        setScale(newScale);
        if (newScale <= scaleStart) {
          setIsFullScale(false);
        }
      }
    }
  }, [scale, scaleStart, scaleEnd, scaleIncreaseRate]);

  const handleScroll = useCallback((event: WheelEvent): void => {
    handleInteraction(event.deltaY);
    if (!isFullScale) {
      event.preventDefault(); // Only prevent default if isFullScale is not true
    }
  }, [handleInteraction, isFullScale]);

  const handleTouchStart = useCallback((event: TouchEvent): void => {
    setLastTouchY(event.touches[0].clientY);
  }, []);

  const handleTouchMove = useCallback((event: TouchEvent): void => {
    if (lastTouchY !== null) {
      const touchY: number = event.touches[0].clientY;
      const deltaY: number = lastTouchY - touchY;
      handleInteraction(deltaY, true);
      if (!isFullScale) {
        event.preventDefault(); // Only prevent default if isFullScale is not true
      }
      setLastTouchY(touchY);
    }
  }, [lastTouchY, handleInteraction, isFullScale]);

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [handleScroll, handleTouchStart, handleTouchMove]);

  useEffect(() => {
    const coversText: boolean = scale > 1.2;
    setTextColor(coversText ? 'white' : '#32ABBC');
  }, [scale]);

  const ellipsisStyle = {
    transform: `scale(${scale}) translateY(${translateYStart}px)`,
    transition: 'transform 0.5s ease-out'
  };

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
