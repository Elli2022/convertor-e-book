"use client"
import React, { useEffect, useState } from 'react';

const WelcomeSection = () => {
  const scaleStart = 0.5; // Start scale
  const scaleEnd = 2.5; // End scale
  const translateYStart = 0; // Initial translateY position
  const scaleIncreaseRate = 0.01; // Scale rate per pixel of scroll
  const [scale, setScale] = useState(scaleStart);
  const [isFullScale, setIsFullScale] = useState(false);
  const [lastTouchY, setLastTouchY] = useState(0);

  const handleTouchStart = (event:any) => {
    setLastTouchY(event.touches[0].clientY); // Record the position of the first touch
  };

  const handleScroll = (event:any) => {
    let scrollDelta;
    const isTouch = event.type === 'touchmove';

    if (isTouch) {
      const touchY = event.touches[0].clientY;
      scrollDelta = lastTouchY - touchY; // Calculate the distance moved since last event
      setLastTouchY(touchY); // Update the last known touch position
    } else {
      scrollDelta = event.deltaY; // Use deltaY for wheel events
    }

    const scrollDown = scrollDelta > 0; // Determine the direction of the scroll

    if (scrollDown) {
      if (!isFullScale) {
        event.preventDefault(); // Prevent the page from scrolling down
        const newScale = Math.min(scale + scaleIncreaseRate * Math.abs(scrollDelta), scaleEnd);
        setScale(newScale);
        if (newScale === scaleEnd) {
          setTimeout(() => setIsFullScale(true), 500); // Allow scrolling after a delay once full scale is reached
        }
      }
    } else if (window.scrollY === 0 || !isFullScale) {
      event.preventDefault(); // Prevent the page from scrolling up
      const newScale = Math.max(scaleStart, scale - scaleIncreaseRate * Math.abs(scrollDelta));
      setScale(newScale);
      if (newScale === scaleStart) {
        setIsFullScale(false); // Reset the full scale state when scaled back to the start
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
  }, [scale, isFullScale]); // Re-run the effect when scale or isFullScale changes

  const ellipsisStyle = {
    transform: `scale(${scale})`,
    transition: 'transform 0.5s ease-out', // Smooth transition for scaling
  };

  return (
    <>
      <section className="text-center w-full relative overflow-hidden flex items-center justify-center" style={{ background: '#D3E0E5', height: '503px' }}>
        <div style={ellipsisStyle} className="absolute top-1/3 w-32 h-32 bg-[#32ABBC] rounded-full z-0" />
        <div className="z-10 relative max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-century-gothic-pro text-black">Välkommen till</h1>
          <div className="mt-2 text-lg md:text-xl lg:text-3xl font-bold font-century-gothic-pro text-black">en byrå fylld av passionerade,</div>
          <div className={`text-lg md:text-xl lg:text-3xl font-bold font-century-gothic-pro`} style={{ color: '#32ABBC' }}>
            <span style={{ color: 'black' }}>prestigelösa och </span>
            resultatdrivna doers.
          </div>
        </div>
      </section>
    </>
  );
};

export default WelcomeSection;
