import React from 'react';

const NewSection = () => {
  return (
    <>
      <section className="text-center w-full relative overflow-hidden flex flex-col lg:flex-row items-center justify-center bg-[#15253E] p-8 sm:p-12 md:p-16 lg:p-20">
        
        {/* Image Container */}
        <div className="w-full lg:w-1/2 lg:order-2 flex justify-center lg:justify-end lg:ml-14 group" style={{ maxWidth: '503px' }}>
          <img src="/images/imageConvertor1.jpeg" alt="Beskrivande text" className="w-full h-auto lg:h-[503px] lg:w-[503px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" />
        </div>
        
        {/* Text Container */}
        <div className="w-full lg:w-1/2 lg:order-1 flex flex-col text-left justify-center">
          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-century-gothic-pro mt-5">Vi är <span className="text-[#33ABBD]">passionerade</span></h1>
          <p className="text-white text-base md:text-lg lg:text-xl font-extralight mt-4">
            Vi är passionerade – det ligger i vårt DNA.<br/>
            Vi är nyfikna på alla våra uppdragsgivares olika branscher, men också på de möjligheter vi med teknikens hjälp kan skapa tillsammans.<br/><br/>
            Vi är alltid lojala mot uppgiften, drar oss inte för att utmana det förväntade och släpper inte greppet förrän vi levererat en lösning vi alla kan vara stolta över.
          </p>
        </div>
      </section>
    </>
  );
};

export default NewSection;
