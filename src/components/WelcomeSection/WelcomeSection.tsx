"use client"
import React, { useEffect, useState } from 'react';

const WelcomeSection: React.FC = () => {
  const scaleStart = 0.5;
  const scaleEnd = 2.5;
  const translateYStart = 0;
  const scaleIncreaseRate = 0.01;

  const [scale, setScale] = useState<number>(scaleStart);
  const [isFullScale, setIsFullScale] = useState<boolean>(false);
  const [textColor, setTextColor] = useState<string>('#32ABBC');

  const handleInteraction = (deltaY: number) => {
    const scrollDelta = Math.abs(deltaY);
    const scrollDown = deltaY > 0;

    if (scrollDown) {
      if (!isFullScale) {
        let newScale = scale + scaleIncreaseRate * scrollDelta;
        if (newScale >= scaleEnd) {
          newScale = scaleEnd;
          setScale(newScale);
          setTimeout(() => {
            setIsFullScale(true);
          }, 500);
        } else {
          setScale(newScale);
        }
      }
    } else {
      if (window.scrollY === 0) {
        let newScale = scale - scaleIncreaseRate * scrollDelta;
        if (newScale <= scaleStart) {
          newScale = scaleStart;
          setIsFullScale(false);
        }
        setScale(newScale);
      }
    }
  };

  const handleScroll = (event: WheelEvent) => {
    event.preventDefault();
    handleInteraction(event.deltaY);
  };

  const handleTouchMove = (event: TouchEvent) => {
    const touchY = event.touches[0].clientY;
    const deltaY = touchY - (event.target as HTMLElement).getBoundingClientRect().top;
    handleInteraction(deltaY);
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [scale, isFullScale]);

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
