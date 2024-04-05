import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

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
          <div className="flex justify-center lg:justify-start gap-4 mt-4 mb-6">
            <a href="https://www.facebook.com/convertorsverige?locale=sv_SE" aria-label="Facebook">
            <img src="/images/Link_1.svg" alt="Facebook" className="h-6 w-6 sm:h-8 sm:w-8" />

            </a>
            <a href="https://www.linkedin.com/company/convertor-ab/mycompany/" aria-label="LinkedIn">
            <img src="/images/Link_2.svg" alt="LinkedIn" className="h-6 w-6 sm:h-8 sm:w-8" />

            </a>
            <a href="https://www.instagram.com/convertor_malmo/" aria-label="Instagram">
            <img src="/images/Link_3.svg" alt="Instagram" className="h-6 w-6 sm:h-8 sm:w-8" />

            </a>
          </div>

          <p className="text-sm md:text-base">
            Alla rättigheter reserverade © 2023 |
            <a
              href="#integritetspolicy"
              className="hover:underline text-[#32ABBC]"
            >
              Läs vår Integritetspolicy
            </a>{" "}
            |
            <a href="#installningar" className="hover:underline text-[#32ABBC]">
              Ändra dina inställningar
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
