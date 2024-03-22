import React from 'react';

const PrestigelessSection = () => {
  return (
    <section className="text-center w-full relative overflow-hidden flex flex-col items-center justify-center bg-white p-8 sm:p-12 md:p-16 lg:p-20">
      {/* Text Container - Använd max-w-4xl för att matcha bildens bredd */}
      <div className="w-full max-w-4xl mx-auto mb-8 lg:mb-12 text-left">
        <h1 className="text-black font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Vi är <span className="text-[#33ABBD]">prestigelösa</span></h1>
        <p className="text-black text-lg md:text-xl lg:text-2xl font-light mt-4 break-words">
          Vi har ögonen på bollen och vet vad som är viktigt. Och för oss handlar det varken om titlar eller formalia, utan om att skapa de allra bästa förutsättningarna – för våra kunder och för varandra, som kollegor.<br/><br/>
          På Convertor utvecklas vi tillsammans, vi tror på öppenhet och transparens och vi vet att vår allra största tillgång är människorna vi har omkring oss.
        </p>
      </div>

      {/* Image Container */}
      <div className="w-full max-w-4xl mx-auto">
        <img src="/images/imageConvertor2.png" alt="Beskrivande text" className="w-full h-auto object-contain"/>
      </div>
    </section>
  );
};

export default PrestigelessSection;
