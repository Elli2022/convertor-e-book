"use client"
import React, { useRef, useEffect } from 'react';

const ResultOrientedSection: React.FC = () => {
  const textContainerRef = useRef<HTMLDivElement>(null); // Typreferens till textcontainern

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const textObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('wave-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const nodes = textContainerRef.current?.querySelectorAll('h1, p, p > span');
    nodes?.forEach((node) => {
      textObserver.observe(node);
    });

    return () => {
      if (textObserver) {
        nodes?.forEach((node) => {
          textObserver.unobserve(node);
        });
      }
    };
  }, []);

  return (
    <>
      <section className="text-center w-full relative overflow-hidden flex flex-col lg:flex-row items-center justify-center bg-[#D3E0E5] p-8 sm:p-12 md:p-16 lg:p-20 group">
        
        {/* Ellipse (Circle) */}
        <div className="absolute left-0 bottom-0 w-[65vw] h-[65vw] md:w-[25vw] md:h-[25vw] bg-white rounded-full"
             style={{ transform: 'translateX(-60%)' }} />

        {/* Image Container */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end" style={{ maxWidth: '503px' }}>
          <img src="/images/imageConvertor3.png" alt="Beskrivande text" className="w-full h-auto lg:h-[503px] lg:w-[503px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 z-10" />
        </div>
        
        {/* Text Container */}
        <div ref={textContainerRef} className="w-full lg:w-1/2 flex flex-col text-left justify-center lg:ml-14 z-10">
          <h1 className="text-black font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-century-gothic-pro mt-5">Vi är <span className="text-[#33ABBD]">resultatdrivna</span></h1>
          <p className="text-black text-base md:text-lg lg:text-xl font-extralight mt-4">
            På Convertor gör vi skillnad, på riktigt. Vi lockar inte med tomma ord och fina löften utan erbjuder alla våra kunder konkreta och mätbara resultat.<br/><br/>
            Vi glömmer aldrig affären och uppgiften vi är här för att lösa – oavsett om det handlar om att sälja fler hästförsäkringar, få fler människor att bli kunder i en trevlig, lokal bank eller upptäcka hur härligt det är att äga en husbil.
          </p>
        </div>
      </section>
    </>
  );
};

export default ResultOrientedSection;
