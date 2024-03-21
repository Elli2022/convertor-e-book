// src/components/Navbar.tsx

"use client"
import { useState } from 'react';
import Link from 'next/link';
import MenuModal from './MenuModal';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    

  return (
    <nav className="bg-white py-4 w-full lg:flex lg:justify-between lg:items-center">
     
     <div className="flex justify-between items-center px-4 lg:px-8 w-full">
          <div className="flex space-x-4 w-full">
            {/* Logo Bild */}
            <img src="/images/convertor-logo.svg" alt="Convertor Logo" className="h-8 w-auto" />
            
            {/* Toggle Button */}
            <button className="lg:hidden ml-auto" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <svg className="w-6 h-6" fill="none" stroke="#14243D" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
            {/* Länkar */}
            <div className={`lg:flex flex-grow items-center ${isMenuOpen ? 'flex' : 'hidden'} lg:block`}>
            <div className="group lg:flex w-full">
            </div>
            <a href="https://convertor.se/" className="text-custom-blue font-century-gothic-pro uppercase text-xs font-bold leading-tight hover:text-gray-300 py-2 px-3">TJÄNSTER</a>
            <a href="https://convertor.se/kundcase/" className="text-custom-blue font-century-gothic-pro uppercase text-xs font-bold leading-tight hover:text-gray-300 py-2 px-3">CASE</a>
            <a href="https://convertor.se/greenhouse/" className="text-custom-blue font-century-gothic-pro uppercase text-xs font-bold leading-tight hover:text-gray-300 py-2 px-3">GREENHOUSE</a>
            <a href="https://convertor.se/insikt/" className="text-custom-blue font-century-gothic-pro uppercase text-xs font-bold leading-tight hover:text-gray-300 py-2 px-3">INSIKT</a>
            <a href="https://convertor.se/karriar/" className="text-custom-blue font-century-gothic-pro uppercase text-xs font-bold leading-tight hover:text-gray-300 py-2 px-3">KARRIÄR</a>
            <a href="https://convertor.se/kontakt/" className="text-custom-blue font-century-gothic-pro uppercase text-xs font-bold leading-tight hover:text-gray-300 py-2 px-3">KONTAKT</a>
          </div>
        </div>
        </div>
      < MenuModal isOpen={isMenuOpen} onClose={() =>setIsMenuOpen(false)}/>
    </nav>
  );
};

export default Navbar;
