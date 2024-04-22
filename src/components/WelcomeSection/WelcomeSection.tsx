"use client"
import React, { useEffect, useState } from 'react';

const WelcomeSection = () => {
  const scaleStart = 0.5; // Start scale
  const scaleEnd = 2.5; // End scale
  const translateYStart = 0; // Initial translateY position
  const scaleIncreaseRate = 0.01; // Increased rate of scaling per pixel scrolled to make it more sensitive
  const [scale, setScale] = useState(scaleStart);
  const [isFullScale, setIsFullScale] = useState(false); // Tracks whether full scale has been reached

  // Updated state for text color
  const [textColor, setTextColor] = useState('#32ABBC');

  const handleScroll = (event:any) => {
    const scrollDelta = Math.abs(event.deltaY);
    const scrollDown = event.deltaY > 0;

    if (scrollDown) {
      if (!isFullScale) {
        event.preventDefault(); // Prevent actual scrolling
        const scaleChange = scaleIncreaseRate * scrollDelta; // Calculate scale change based on scroll intensity
        const newScale = Math.min(scale + scaleChange, scaleEnd);
        setScale(newScale);
        if (newScale >= scaleEnd) {
          setIsFullScale(true); // Allow natural scrolling when full scale is reached
        }
      }
    } else if (scale > scaleStart) {
      event.preventDefault(); // Prevent actual scrolling when scaling down
      const scaleChange = scaleIncreaseRate * scrollDelta;
      const newScale = Math.max(scaleStart, scale - scaleChange);
      setScale(newScale);
      if (newScale <= scaleStart) {
        setIsFullScale(false); // Allow scaling up again when scale reaches the start
      }
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [scale, isFullScale]); // React to changes in scale and isFullScale

  const ellipsisStyle = {
    transform: `scale(${scale}) translateY(${translateYStart}px)`, // Keep translateY static
  };

  useEffect(() => {
    setTextColor(scale > 1.2 ? 'white' : '#32ABBC');
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

