//src/components/WelcomeSection/WelcomeSection.tsx
"use client"
import React, { useEffect, useState } from 'react';

const WelcomeSection = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calculateTransform = (offsetY) => {
    let scaleStart = 0.5; // Startskala
    let scaleEnd = 1.0; // Mål för skala
    let initialOffset = 100; // Initial offset för att börja skalning
    let scaleIncreaseRate = 0.005; // Takt på skalningsökning per pixel
    let scaledOffsetY = Math.max(0, offsetY - initialOffset); // Justera offsetY så skalning börjar efter en viss punkt

    // Beräkna skala baserat på scroll position, börjar inte öka förrän efter initialOffset
    let scale = Math.min(scaleStart + scaledOffsetY * scaleIncreaseRate, scaleEnd);

    // Rör sig nedåt kontinuerligt efter initialOffset har uppnåtts, ingen övre gräns
    let translateY = scaledOffsetY * 0.5; // Justerbar för att kontrollera hastigheten på nedåtrörelsen

    return `scale(${scale}) translateY(${translateY}px)`;
  };

  const ellipsisStyle = {
    transform: calculateTransform(offsetY),
  };

  return (
    <>
      <section className="text-center w-full relative overflow-hidden flex items-center justify-center" style={{ background: '#D3E0E5', height: '503px' }}>
        {/* Ellips med kontinuerlig rörelse nedåt */}
        <div style={ellipsisStyle} className="absolute top-1/3 w-32 h-32 bg-[#32ABBC] rounded-full z-0" />

        {/* Textinnehåll */}
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

