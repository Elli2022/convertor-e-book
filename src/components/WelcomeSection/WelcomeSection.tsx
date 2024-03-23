"use client"
import React, { useEffect, useRef } from 'react';

const WelcomeSection: React.FC = () => {
  const ellipseRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | null>(null);

  const updateEllipsePosition = () => {
    const x = Math.random() * 80 - 40; // Generera ett värde mellan -40vw och +40vw
    const y = Math.random() * 80 - 40; // Generera ett värde mellan -10vh och +10vh
    if (ellipseRef.current) {
      ellipseRef.current.style.transform = `translate(-50%, -50%) translate(${x}vw, ${y}vh)`;
    }
    animationFrameId.current = requestAnimationFrame(updateEllipsePosition);
  };

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout | null = null;
    
    const handleScrollStart = () => {
      if (!animationFrameId.current) {
        updateEllipsePosition();
      }
    };

    const handleScrollStop = () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
        if (ellipseRef.current) {
          ellipseRef.current.style.transform = 'translate(-50%, -50%)'; // Återställ position
        }
      }
    };

    const handleScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      handleScrollStart();
      scrollTimeout = setTimeout(handleScrollStop, 150); // Användaren har slutat skrolla efter 150ms
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <>
    <div id="ball"></div>
    <section className="text-center w-full relative overflow-hidden flex items-center justify-center" style={{ background: '#D3E0E5', height: '503px' }}>
      {/* Ellipse Animation */}
      <div ref={ellipseRef} className="absolute left-1/2 top-2/5 w-32 h-32 bg-[#32ABBC] rounded-full z-0" />

      {/* Text Content */}
      <div className="z-10 relative max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-century-gothic-pro text-black">Välkommen till</h1>
        <div className="mt-2 text-lg md:text-xl lg:text-3xl font-bold font-century-gothic-pro text-black">en byrå fylld av passionerade,</div>
        <div className="text-lg md:text-xl lg:text-3xl font-bold font-century-gothic-pro" style={{ color: '#32ABBC' }}>prestigelösa och resultatdrivna doers.</div>
      </div>
    </section>
    </>
  );
};

export default WelcomeSection;
