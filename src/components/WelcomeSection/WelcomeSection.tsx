"use client"
import React, { useEffect, useState, useCallback } from 'react';

const WelcomeSection: React.FC = () => {
  const scaleStart: number = 0.5; // Start scale
  const scaleEnd: number = 2.5; // End scale
  const translateYStart: number = 0; // Initial translateY position
  const scaleIncreaseRate: number = 0.01; // Increased rate of scaling per pixel scrolled
  const [scale, setScale] = useState<number>(scaleStart);
  const [isFullScale, setIsFullScale] = useState<boolean>(false); // Tracks if full scaling is achieved
  const [lastTouchY, setLastTouchY] = useState<number | null>(null); // Last touch Y position for touch events
  const [textColor, setTextColor] = useState<string>('#32ABBC'); // State for text color

  const handleInteraction = useCallback((deltaY: number, isTouch: boolean = false): boolean => {
    const scrollDelta: number = Math.abs(deltaY) * (isTouch ? 1 : 50); // Normalize wheel delta, amplify for touch for consistent behavior
    const scrollDown: boolean = deltaY > 0;

    let newScale: number = scale;
    if (scrollDown) {
      if (scale < scaleEnd) {
        newScale = Math.min(scale + scaleIncreaseRate * scrollDelta, scaleEnd);
        setScale(newScale);
      }
    } else {
      if (window.scrollY === 0 && scale > scaleStart) {
        newScale = Math.max(scale - scaleIncreaseRate * scrollDelta, scaleStart);
        setScale(newScale);
      }
    }

    // Return true only if the scale has actually changed
    return newScale !== scale;
  }, [scale, scaleStart, scaleEnd, scaleIncreaseRate]);

  const handleScroll = useCallback((event: WheelEvent): void => {
    if (handleInteraction(event.deltaY)) {
      event.preventDefault(); // Prevent default only if scaling occurs
    }
  }, [handleInteraction]);

  const handleTouchStart = useCallback((event: TouchEvent): void => {
    setLastTouchY(event.touches[0].clientY);
  }, []);

  const handleTouchMove = useCallback((event: TouchEvent): void => {
    if (lastTouchY !== null) {
      const touchY: number = event.touches[0].clientY;
      const deltaY: number = lastTouchY - touchY;
      if (handleInteraction(deltaY, true)) {
        event.preventDefault(); // Prevent default only if scaling occurs
      }
      setLastTouchY(touchY);
    }
  }, [lastTouchY, handleInteraction]);

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
