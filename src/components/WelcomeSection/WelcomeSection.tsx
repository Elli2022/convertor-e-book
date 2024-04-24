"use client"
import React, { useEffect, useState, useCallback } from 'react';

const WelcomeSection: React.FC = () => {
  const scaleStart = 0.5; // Start scale
  const scaleEnd = 2.5; // End scale
  const translateYStart = 0; // Initial translateY position
  const scaleIncreaseRate = 0.01; // Increased rate of scaling per pixel scrolled
  const [scale, setScale] = useState<number>(scaleStart);
  const [isFullScale, setIsFullScale] = useState<boolean>(false); // Tracks if full scaling is achieved

  const [textColor, setTextColor] = useState<string>('#32ABBC'); // State for text color

  const handleInteraction = useCallback((deltaY: number) => {
    const scrollDown = deltaY > 0;
    if (scrollDown) {
      if (!isFullScale) {
        let newScale = scale + scaleIncreaseRate * Math.abs(deltaY);
        if (newScale >= scaleEnd) {
          newScale = scaleEnd;
          setIsFullScale(true);
        }
        setScale(newScale);
        return true; // Indicate that default behavior should be prevented
      }
    } else {
      if (window.scrollY === 0 && scale > scaleStart) {
        let newScale = scale - scaleIncreaseRate * Math.abs(deltaY);
        if (newScale <= scaleStart) {
          newScale = scaleStart;
          setIsFullScale(false);
        }
        setScale(newScale);
        return true; // Indicate that default behavior should be prevented
      }
    }
    return false; // No need to prevent default behavior
  }, [scale, isFullScale, scaleStart, scaleEnd, scaleIncreaseRate]);

  const throttle = (callback: (event: any) => void, limit: number) => {
    let waiting = false;
    return function(event: any) {
      if (!waiting) {
        const shouldPreventDefault:any = callback(event);
        if (shouldPreventDefault) event.preventDefault();
        waiting = true;
        setTimeout(() => {
          waiting = false;
        }, limit);
      }
    };
  };

  const handleScroll = throttle((event: WheelEvent) => {
    return handleInteraction(event.deltaY);
  }, 100);

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [handleScroll]);

  const ellipsisStyle = {
    transform: `scale(${scale}) translateY(${translateYStart}px)`,
    transition: 'transform 0.5s ease-out' // Smooth scaling transitions
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
