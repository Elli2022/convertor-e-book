"use client"
// Import necessary hooks and React functionality
import React, { useEffect, useState, useCallback } from 'react';

// Define a functional component called WelcomeSection
const WelcomeSection: React.FC = () => {
  // State and constants for scaling the central circle
  const scaleStart = 0.5;
  const scaleEnd = 2.5;
  const translateYStart = 0;
  const scaleIncreaseRate = 0.01;
  const [scale, setScale] = useState<number>(scaleStart);
  const [isFullScale, setIsFullScale] = useState<boolean>(false);

  // State for text color transition based on scaling
  const [textColor, setTextColor] = useState<string>('#32ABBC');
  
  // State to keep track of the last touch Y-coordinate
  const [lastTouchY, setLastTouchY] = useState<number | null>(null);

  // Function to handle scroll or touch interactions to scale the circle
  const handleInteraction = useCallback((deltaY: number) => {
    const scrollDelta = Math.abs(deltaY);
    const scrollDown = deltaY > 0;

    // Adjust scale based on scroll direction
    if (scrollDown) {
      if (!isFullScale) {
        const newScale = Math.min(scale + scaleIncreaseRate * scrollDelta, scaleEnd);
        setScale(newScale);
        if (newScale === scaleEnd) {
          setIsFullScale(true);
        }
        return true;
      }
    } else {
      // Allow scale adjustment only if the page is not scrolled down
      if (window.scrollY === 0 && scale > scaleStart) {
        const newScale = Math.max(scale - scaleIncreaseRate * scrollDelta, scaleStart);
        setScale(newScale);
        if (newScale === scaleStart) {
          setIsFullScale(false);
        }
        return true;
      }
    }
    return false;
  }, [scale, isFullScale, scaleStart, scaleEnd, scaleIncreaseRate]);

  // Event handler for mouse wheel scroll
  const handleScroll = useCallback((event: WheelEvent) => {
    if (isFullScale && handleInteraction(event.deltaY)) {
      event.preventDefault();
    }
  }, [handleInteraction, isFullScale]);

  // Event handler for touch start
  const handleTouchStart = useCallback((event: TouchEvent) => {
    setLastTouchY(event.touches[0].clientY);
  }, []);

  // Event handler for touch move
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

  // Adding event listeners on mount and cleaning up on unmount
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

  // Style for scaling transformation and transition effect
  const ellipsisStyle = {
    transform: `scale(${scale}) translateY(${translateYStart}px)`,
    transition: 'transform 0.5s ease-out'
  };

  // Adjust text color based on scale
  useEffect(() => {
    const coversText = scale > 1.2;
    setTextColor(coversText ? 'white' : '#32ABBC');
  }, [scale]);

  // Render the component structure
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
