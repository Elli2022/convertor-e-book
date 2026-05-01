"use client";

import { useRevealOnIntersect } from "@/hooks/useRevealOnIntersect";

const WeAreDoersSection: React.FC = () => {
  const textContainerRef = useRevealOnIntersect<HTMLDivElement>();

  return (
    <>
      <section className="text-center w-full relative overflow-hidden flex items-center justify-center bg-[#15253E] px-8 py-12 sm:px-12 sm:py-16 md:px-16 md:py-20 lg:px-20 lg:py-24">
        <div
          className="absolute left-1/2 top-1/3 w-32 h-32 bg-[#32ABBC] rounded-full z-0"
          style={{
            transform: "translate(-50%, -50%)",
          }}
        />

        <div
          ref={textContainerRef}
          className="z-10 mx-auto mt-[116px] max-w-4xl px-4 max-[480px]:mt-[153px] lg:mt-[76px]"
        >
          <h1 className="font-century-gothic-pro text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Med andra ord: <br />
            vi är <span className="text-[#33ABBD]">doers.</span>
          </h1>
          <p className="section-copy mt-4 max-w-4xl text-left text-base font-extralight text-white md:text-lg lg:text-xl">
            Vi pratar inte. Vi gör. Vi levererar och vi får folk att se nya
            möjligheter. Varje dag, i varje projekt, anstränger vi oss alltid
            för att ge det där lilla extra. Och så har vi himla kul under
            tiden, förstås.
          </p>
        </div>
      </section>
      <div className="w-full bg-[#15253E] flex justify-center py-2">
        <div
          className="w-11/12 border-t border-gray-300"
          style={{ borderWidth: "1px" }}
        />
      </div>
    </>
  );
};

export default WeAreDoersSection;
