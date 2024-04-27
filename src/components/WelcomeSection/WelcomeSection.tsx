"use client"
import React, { useEffect, useState, useCallback } from 'react';

const WelcomeSection = () => {
  const scaleStart = 0.5; // Start scale
  const scaleEnd = 2.5; // End scale
  const translateYStart = 0; // Initial translateY position
  const scaleIncreaseRate = 0.01; // Increased rate of scaling per pixel scrolled
  const [scale, setScale] = useState(scaleStart);
  const [isFullScale, setIsFullScale] = useState(false); // Tracks if full scaling is achieved
  const [lastTouchY, setLastTouchY] = useState<number | null>(null); // Last touch Y position for touch events
  const [textColor, setTextColor] = useState('#32ABBC'); // State for text color

  const handleInteraction = useCallback((deltaY: number, isTouch: boolean = false) => {
    const scrollDelta = Math.abs(deltaY) * (isTouch ? 1 : 50); // Normalize wheel delta, amplify for touch for consistent behavior
    const scrollDown = deltaY > 0;

    if (scrollDown) {
      if (!isFullScale) {
        let newScale = Math.min(scale + scaleIncreaseRate * scrollDelta, scaleEnd);
        setScale(newScale);
        if (newScale >= scaleEnd) {
          setIsFullScale(true);
          setTimeout(() => { setIsFullScale(false); }, 500); // Allow natural scrolling after a delay when full scale is reached
        }
      }
    } else {
      if (window.scrollY === 0) {
        let newScale = Math.max(scale - scaleIncreaseRate * scrollDelta, scaleStart);
        setScale(newScale);
        if (newScale <= scaleStart) {
          setIsFullScale(false); // Re-enable scaling up when scaled back to start
        }
      }
    }
  }, [scale, isFullScale, scaleStart, scaleEnd, scaleIncreaseRate]);

  const handleScroll = useCallback((event:any) => {
    handleInteraction(event.deltaY);
    event.preventDefault(); // Prevent default scroll behavior during active scaling
  }, [handleInteraction]);

  const handleTouchStart = useCallback((event:any) => {
    setLastTouchY(event.touches[0].clientY);
  }, []);

  const handleTouchMove = useCallback((event:any) => {
    if (lastTouchY !== null) {
      const touchY = event.touches[0].clientY;
      const deltaY = lastTouchY - touchY;
      handleInteraction(deltaY, true);
      setLastTouchY(touchY);
      event.preventDefault(); // Prevent default scroll behavior during touch move
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
    const coversText = scale > 1.2;
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
