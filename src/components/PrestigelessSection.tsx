//src/components/PrestigelessSection.tsx
"use client"
import React, { useRef, useEffect } from 'react';

const PrestigelessSection: React.FC = () => {
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
      <section className="text-center w-full relative overflow-hidden flex flex-col items-center justify-center bg-white p-8 sm:p-12 md:p-16 lg:p-20 group">
        
        {/* Ellipse (Circle) */}
        <div  className="absolute right-0 top-1/2 w-[50vw] h-[50vw] md:w-[35vw] md:h-[35vw] bg-[#D3E0E5] rounded-full"
             style={{ transform: 'translate(25%, -50%)' }} />

        {/* Bildcontainer */}
        <div className="w-full max-w-4xl mx-auto md:order-last z-10">
          <img src="/images/imageConvertor2.png" alt="Beskrivande text" className="w-full h-auto object-contain transition-transform duration-300 ease-in-out group-hover:scale-110" />
        </div>

        {/* Textcontainer */}
        <div ref={textContainerRef} className="w-full max-w-4xl mx-auto mb-8 lg:mb-12 text-left z-10">
          <h1 className="text-black font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-left md:text-center mt-5">Vi är <span className="text-[#33ABBD]">prestigelösa</span></h1>
          <p className="text-black text-base md:text-lg lg:text-xl font-extralight mt-4 break-words">
            Vi har ögonen på bollen och vet vad som är viktigt. Och för oss handlar det varken om titlar eller formalia, utan om att skapa de allra bästa förutsättningarna – för våra kunder och för varandra, som kollegor.<br/><br/>
            På Convertor utvecklas vi tillsammans, vi tror på öppenhet och transparens och vi vet att vår allra största tillgång är människorna vi har omkring oss.
          </p>
        </div>
      </section>
    </>
  );
};

export default PrestigelessSection;
