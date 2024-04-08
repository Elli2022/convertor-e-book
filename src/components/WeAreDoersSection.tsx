import React from "react";

const WeAreDoersSection = () => {
  return (
    <>
      <style>
        {`
          @media (max-width: 480px) {
            .small-viewport-mt {
              margin-top: 153px !important; /* Öka margin-top för mindre skärmar */
            }
          }
        `}
      </style>
      <section className="text-center w-full relative overflow-hidden flex items-center justify-center bg-[#15253E] p-8 sm:p-12 md:p-16 lg:p-20">
        {/* Ellipse, no animation and moved up slightly */}
        <div
          className="absolute left-1/2 top-1/3 w-32 h-32 bg-[#32ABBC] rounded-full z-0"
          style={{
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Text Container */}
        <div className="z-10 max-w-4xl mx-auto px-4 mt-[116px] lg:mt-[76px] small-viewport-mt">
          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight century-gothic-pro">
            Med andra ord: <br />
            vi är <span className="text-[#33ABBD]">doers.</span>
          </h1>
          <p className="text-white text-base md:text-lg lg:text-xl font-extralight mt-4 text-left max-w-4xl">
            Vi pratar inte. Vi gör. Vi levererar och vi får folk att se nya
            möjligheter. Varje dag, i varje projekt, anstränger vi oss alltid
            för att ge det där lilla extra. Och så har vi himla kul under tiden,
            förstås.
          </p>
        </div>
      </section>
         {/* Container Div för horisontell linje */}
      <div className="w-full bg-[#15253E] flex justify-center py-2">
        <div className="border-t border-gray-300 w-11/12" style={{ borderWidth: '1px' }}></div>
      </div>

    </>
  );
};

export default WeAreDoersSection;
