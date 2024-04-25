"use client"
import React, { useEffect, useState, useCallback } from 'react';

const WelcomeSection: React.FC = () => {
  const scaleStart = 0.5;  // Start scale
  const scaleEnd = 2.5;    // Max scale
  const translateYStart = 0;  // Start position for translateY
  const scaleIncreaseRate = 0.01;  // How much to scale per pixel of touch move
  const touchScaleThreshold = 2;  // Threshold for touch move sensitivity
  const [scale, setScale] = useState(scaleStart);
  const [isFullScale, setIsFullScale] = useState(false);
  const [textColor, setTextColor] = useState('#32ABBC');
  const [lastTouchY, setLastTouchY] = useState<number | null>(null);

  const handleInteraction = useCallback((deltaY: number) => {
    if (window.scrollY !== 0) return false; // Interact only at the top of the page

    const scrollDelta = Math.abs(deltaY);
    if (scrollDelta < touchScaleThreshold) return false;  // Ignore small moves

    const scrollDown = deltaY > 0;
    if (scrollDown && !isFullScale) {
      const newScale = Math.min(scale + scaleIncreaseRate * scrollDelta, scaleEnd);
      setScale(newScale);
      return newScale === scaleEnd;
    } else if (!scrollDown && scale > scaleStart) {
      const newScale = Math.max(scale - scaleIncreaseRate * scrollDelta, scaleStart);
      setScale(newScale);
      return newScale === scaleStart;
    }
    return false;
  }, [scale, scaleStart, scaleEnd, scaleIncreaseRate, isFullScale, touchScaleThreshold]);

  const handleTouchMove = useCallback((event: TouchEvent) => {
    if (lastTouchY !== null) {
      const touchY = event.touches[0].clientY;
      const deltaY = lastTouchY - touchY;
      if (handleInteraction(deltaY)) {
        event.preventDefault();
      }
      setLastTouchY(touchY);
    }
  }, [lastTouchY, handleInteraction]);

  useEffect(() => {
    const handleTouchStart = (event: TouchEvent) => {
      setLastTouchY(event.touches[0].clientY);
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [handleTouchMove]);

  const ellipsisStyle = {
    transform: `scale(${scale}) translateY(${translateYStart}px)`,
    transition: 'transform 0.5s ease-out'
  };

  useEffect(() => {
    const coversText = scale > 1.2;
    setTextColor(coversText ? 'white' : '#32ABBC');
  }, [scale]);

  return (
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
  );
};

export default WelcomeSection;
