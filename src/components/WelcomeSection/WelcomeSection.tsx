"use client"
import React, { useEffect, useState } from 'react';

const WelcomeSection = () => {
  const scaleStart = 0.5;  // Start scale
  const scaleEnd = 2.5;    // End scale
  const translateYStart = 0; // Initial translateY position
  const scaleIncreaseRate = 0.01; // Increased rate of scaling per pixel scrolled
  const [scale, setScale] = useState(scaleStart);
  const [isFullScale, setIsFullScale] = useState(false);
  const [lastTouchY, setLastTouchY] = useState(0);
  const [textColor, setTextColor] = useState('#32ABBC'); // Initialized state for text color

  const handleTouchStart = (event:any) => {
    setLastTouchY(event.touches[0].clientY); // Initialize the touch position
  };

  const handleScroll = (event:any) => {
    const isTouch = event.type === 'touchmove';
    let scrollDelta = 0;

    if (isTouch) {
      const touchY = event.touches[0].clientY;
      scrollDelta = lastTouchY - touchY;
      setLastTouchY(touchY);
    } else {
      scrollDelta = event.deltaY;
    }

    const scrollDown = scrollDelta > 0;

    if (scrollDown) {
      if (!isFullScale) {
        event.preventDefault();  // Prevent scrolling when scaling up
        let newScale = scale + scaleIncreaseRate * Math.abs(scrollDelta);
        if (newScale >= scaleEnd) {
          newScale = scaleEnd;
          setIsFullScale(true); // Enable natural page scrolling after full scale is reached
        }
        setScale(newScale);
      }
    } else {
      if (scale > scaleStart && (window.scrollY === 0 || !isFullScale)) {
        event.preventDefault();  // Prevent scrolling when scaling down
        const newScale = Math.max(scaleStart, scale - scaleIncreaseRate * Math.abs(scrollDelta));
        setScale(newScale);
        if (newScale === scaleStart) {
          setIsFullScale(false);  // Allow scaling up when scaled back to start
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

  useEffect(() => {
    // Update text color based on the scale
    setTextColor(scale > 1.2 ? 'white' : '#32ABBC');
  }, [scale]);

  const ellipsisStyle = {
    transform: `scale(${scale}) translateY(${translateYStart}px)`,
    transition: 'transform 0.5s ease-out',
    backgroundColor: '#32ABBC',
    width: '32px',
    height: '32px',
    borderRadius: '50%', // Makes the div circular
    position: 'absolute',
    top: '33%', // Adjust this value as needed to center vertically
    zIndex: 0
  };

  return (
    <>
      <section className="text-center w-full relative overflow-hidden flex items-center justify-center" style={{ background: '#D3E0E5', height: '503px' }}>
        <div style={ellipsisStyle} />
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
