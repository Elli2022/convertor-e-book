import React from "react";

const WeAreDoersSection = () => {
  return (
    <>
      <style>
        {`
          @keyframes horizontal-bounce {
            0%, 100% {
              transform: translate(-50%, -50%) translateX(-10vw);
            }
            50% {
              transform: translate(-50%, -50%) translateX(10vw);
            }
          }
        `}
      </style>
      {/* Använd flex för att centrera innehållet vertikalt */}
      <section className="text-center w-full relative overflow-hidden flex flex-col lg:flex-row items-center justify-center bg-[#15253E] p-8 sm:p-12 md:p-16 lg:p-20">
        {/* Ellipse Animation */}
        <div
          className="absolute left-1/2 top-1/5 w-32 h-32 bg-[#32ABBC] rounded-full z-0"
          style={{}}
        />

        {/* Flex container för att hålla textinnehållet, centrering sker genom flex */}
        {/* Text Container - Kommer automatiskt efter bilden och har "order-2" */}
        <div className="w-full lg:w-1/2 flex flex-col text-left justify-center lg:ml-14 z-10">
          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-century-gothic-pro mt-5 text-center ">Med andra ord: <br />Vi är <span className="text-[#33ABBD]">doers.</span></h1>
          <p className="text-white text-base md:text-lg lg:text-xl font-extralight mt-4">
          Vi pratar inte. Vi gör. Vi levererar och vi får folk att se nya möjligheter. <br/><br/>
          Varje dag, i varje projekt, anstränger vi oss alltid för att ge det där lilla extra. Och så har vi himla kul under tiden, förstås.
          </p>
        </div>
      </section>
    </>
  );
};

export default WeAreDoersSection;
