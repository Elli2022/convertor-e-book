import React from "react";

const Footer = () => {
  return (
    <footer className="text-center w-full relative overflow-hidden flex flex-col items-center justify-center bg-[#15253E] p-8 sm:p-12 md:p-16 lg:p-20 text-white">
      <div
        className="flex flex-wrap justify-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10 2xl:space-x-20 mb-8 text-sm sm:text-base md:text-lg lg:text-xl"
        style={{
          fontFamily: "Helvetica Neue",
          fontWeight: 300,
          lineHeight: "20px",
        }}
      >
        <a
          href="https://convertor.se/tjanster/"
          className="hover:underline"
          style={{ color: "white", wordWrap: "break-word" }}
        >
          Tjänster
        </a>
        <a
          href="https://convertor.se/kundcase/"
          className="hover:underline"
          style={{ color: "white", wordWrap: "break-word" }}
        >
          Case
        </a>
        <a
          href="https://convertor.se/greenhouse/"
          className="hover:underline"
          style={{ color: "white", wordWrap: "break-word" }}
        >
          Greenhouse
        </a>
        <a
          href="https://convertor.se/insikt/"
          className="hover:underline"
          style={{ color: "white", wordWrap: "break-word" }}
        >
          Insikt
        </a>
        <a
          href="https://convertor.se/karriar/"
          className="hover:underline"
          style={{ color: "white", wordWrap: "break-word" }}
        >
          Karriär
        </a>
        <a
          href="https://convertor.se/kontakt/"
          className="hover:underline"
          style={{ color: "white", wordWrap: "break-word" }}
        >
          Kontakt
        </a>
      </div>

      <div>
        {/* Contact Information */}
        <div
          className="flex flex-wrap justify-center space-x-2 sm:space-x-4 md:space-x-12 lg:space-x-8 xl:space-x-10 2xl:space-x-30 mb-8 text-sm sm:text-base md:text-lg lg:text-xl text-left gap-4 mb-20 mt-12"
          style={{
            fontFamily: "Helvetica Neue",
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
            className="lg:inline-block lg:mx-0 mx-auto"
          >
            <img
              src="/images/convertorLogo.png"
              alt="Convertor Logo"
              className="mx-auto h-8 sm:h-9 md:h-10 lg:h-12 xl:h-14 mb-12"
            />
          </a>

          {/* Wrapper to control layout */}
          <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-4">
            {/* Text section */}
            <p className="text-[13px] sm:text-[15px] lg:text-[16px] font-light text-[rgba(255,255,255,0.5)] max-w-full text-center lg:text-left">
              Alla rättigheter reserverade © 2023 | Läs vår
              <a
                href="https://convertor.se/integritetspolicy/"
                className="hover:underline text-[rgba(255,255,255,0.80)]"
              >
                Integritetspolicy
              </a>
              |
              <a
                href="https://convertor.se/#!"
                className="hover:underline text-[rgba(255,255,255,0.80)]"
              >
                Ändra dina inställningar
              </a>
            </p>

            {/* Social media icons */}
            <div className="flex gap-4">
              <a href="https://www.facebook.com/yourpage" aria-label="Facebook">
                <img
                  src="/images/Link_1.svg"
                  alt="Facebook"
                  className="h-6 w-6 sm:h-8 sm:w-8"
                />
              </a>
              <a href="https://www.linkedin.com/yourpage" aria-label="LinkedIn">
                <img
                  src="/images/Link_2.svg"
                  alt="LinkedIn"
                  className="h-6 w-6 sm:h-8 sm:w-8"
                />
              </a>
              <a
                href="https://www.instagram.com/yourpage"
                aria-label="Instagram"
              >
                <img
                  src="/images/Link_3.svg"
                  alt="Instagram"
                  className="h-6 w-6 sm:h-8 sm:w-8"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
