import React from "react";

const Footer = () => {
  return (
    <footer className="text-center w-full relative overflow-hidden flex flex-col items-center justify-center bg-[#15253E] p-8 sm:p-12 md:p-16 lg:p-20 text-white">
      <div
        className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-20 mb-8 text-base sm:text-lg md:text-xl lg:text-2xl font-extralight"
        style={{
          fontFamily: "Helvetica Neue",
          lineHeight: "20px",
        }}
      >
        <a
          href="https://convertor.se/tjanster/"
          className="hover:underline no-cursor-pointer"
          style={{ color: "white", wordWrap: "break-word" }}
        >
          Tjänster
        </a>
        <a
          href="https://convertor.se/kundcase/"
          className="hover:underline no-cursor-pointer"
          style={{ color: "white", wordWrap: "break-word" }}
        >
          Case
        </a>
        <a
          href="https://convertor.se/greenhouse/"
          className="hover:underline no-cursor-pointer"
          style={{ color: "white", wordWrap: "break-word" }}
        >
          Greenhouse
        </a>
        <a
          href="https://convertor.se/insikt/"
          className="hover:underline no-cursor-pointer"
          style={{ color: "white", wordWrap: "break-word" }}
        >
          Insikt
        </a>
        <a
          href="https://convertor.se/karriar/"
          className="hover:underline no-cursor-pointer"
          style={{ color: "white", wordWrap: "break-word" }}
        >
          Karriär
        </a>
        <a
          href="https://convertor.se/kontakt/"
          className="hover:underline no-cursor-pointer"
          style={{ color: "white", wordWrap: "break-word" }}
        >
          Kontakt
        </a>
      </div>

      <div>
        {/* Contact Information */}
        <div
          className="flex flex-wrap justify-center space-x-2 sm:space-x-4 md:space-x-12 lg:space-x-8 xl:space-x-10 2xl:space-x-30 mb-8 text-sm sm:text-base md:text-lg lg:text-xl text-left gap-12 mb-20 mt-12 font-extralight"
          style={{
            fontFamily: "Helvetica Neue",
            lineHeight: "20px",
          }}
        >
          <div className="space-y-3">
            <span className="block">040-885 93 90</span>
            <span className="block">info@convertor.se</span>
          </div>
          <div className="space-y-3">
            <span className="block">Nordenskiöldsgatan 24</span>
            <span className="block">211 19 Malmö</span>
          </div>
        </div>

        <div>
          <a
            href="https://convertor.se/"
            className="lg:inline-block lg:mx-0 mx-auto no-cursor-pointer"
          >
            <img
              src="/images/convertorLogo.png"
              alt="Convertor Logo"
              className="mx-auto h-10 sm:h-9 md:h-8 lg:h-6 xl:h-8 mb-12 mt-12"
            />
          </a>{" "}
          <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between items-center space-y-4 lg:space-y-0 lg:space-x-4">
            {/* Sociala medieikoner - Placerade först för små skärmar, men visuellt flyttas till höger på större skärmar */}
            <div className="flex justify-center lg:justify-end gap-4 lg:order-last lg:ml-auto">
              <a
                href="https://www.facebook.com/convertorsverige?locale=sv_SE"
                aria-label="Facebook"
                className="hover:opacity-75 no-cursor-pointer"
              >
                <img
                  src="/images/Link_1.svg"
                  alt="Facebook"
                  className="h-6 w-6 sm:h-8 sm:w-8 no-cursor-pointer"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/convertor-ab/mycompany/"
                aria-label="LinkedIn"
                className="hover:opacity-75"
              >
                <img
                  src="/images/Link_2.svg"
                  alt="LinkedIn"
                  className="h-6 w-6 sm:h-8 sm:w-8 no-cursor-pointer"
                />
              </a>
              <a
                href="https://www.instagram.com/convertor_malmo/"
                aria-label="Instagram"
                className="hover:opacity-75 no-cursor-pointer"
              >
                <img
                  src="/images/Link_3.svg"
                  alt="Instagram"
                  className="h-6 w-6 sm:h-8 sm:w-8 no-cursor-pointer"
                />
              </a>
            </div>
          <div>
            {/* Textsektion */}
            <p className="lg:order-2 lg:flex-grow text-[13px] sm:text-[15px] lg:text-[16px] font-light text-[rgba(255,255,255,0.5)] lg:text-right lg:ml-4">
              {" "}
              {/* Lägg till margin här */}
              Alla rättigheter reserverade © 2023 {" | "}
              <span className="mx-1">Läs vår</span>
              <a
                href="https://convertor.se/integritetspolicy/"
                className="hover:underline text-[rgba(255,255,255,0.80)] no-cursor-pointer"
              >
                Integritetspolicy
              </a>
              <span className="mx-1">|</span>
              <a
                href="https://convertor.se/#!"
                className="hover:underline text-[rgba(255,255,255,0.80)] no-cursor-pointer"
              >
                Ändra dina inställningar
              </a>
            </p>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
