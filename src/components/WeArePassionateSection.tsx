import React from 'react';

const NewSection = () => {
  return (
    <section className="text-center w-full h-[503px] relative overflow-hidden flex flex-col lg:flex-row items-center justify-center bg-[#15253E]">
      
      {/* Image Container */}
      <div className="w-full lg:w-1/2 lg:order-2">
        <img src="/images/imageConvertor1.jpeg" alt="Beskrivande text" className="w-full h-[250px] lg:h-[503px] object-cover" />
      </div>
      
      {/* Text Container - Uppdaterad med responsiva marginaler */}
      <div className="w-full lg:w-1/2 lg:order-1 px-4 lg:ml-[180px] ml-[20px] md:ml-[40px] flex flex-col text-left justify-center">
        <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl leading-tight font-century-gothic-pro">Vi är <span className="text-[#33ABBD]">passionerade</span></h1>
        <p className="text-white text-base md:text-lg lg:text-xl font-century-gothic-pro font-light mt-2">
          Vi är passionerade – det ligger i vårt DNA.<br/>
          Vi är nyfikna på alla våra uppdragsgivares olika branscher, men också på de möjligheter vi med teknikens hjälp kan skapa tillsammans.<br/><br/>
          Vi är alltid lojala mot uppgiften, drar oss inte för att utmana det förväntade och släpper inte greppet förrän vi levererat en lösning vi alla kan vara stolta över
        </p>
      </div>
    </section>
  );
};

export default NewSection;
