import React from 'react';

const ResultOrientedSection = () => {
  return (
    <>
      <section className="text-center w-full relative overflow-hidden flex flex-col lg:flex-row items-center justify-center bg-[#D3E0E5] p-8 sm:p-12 md:p-16 lg:p-20">
        
        {/* Image Container - Kommer först och har automatiskt "order-1" */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end" style={{ maxWidth: '503px' }}>
          <img src="/images/imageConvertor3.png" alt="Beskrivande text" className="w-full h-auto lg:h-[503px] lg:w-[503px] object-cover" />
        </div>
        
        {/* Text Container - Kommer automatiskt efter bilden och har "order-2" */}
        <div className="w-full lg:w-1/2 flex flex-col text-left justify-center lg:ml-14">
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
