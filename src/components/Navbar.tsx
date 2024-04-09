//src/components/Navbar.tsx
"use client"
import React, { useState, useEffect } from 'react';
import MenuModal from './MenuModal';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Automatically close the modal on larger screens
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Funktion för att växla menyns synlighet
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="bg-white py-4 w-full flex justify-between items-center px-4 lg:px-8">
            {/* Logo */}
            <a href="https://convertor.se/">
                <img src="/images/convertor-logo.svg" alt="Convertor Logo" className="h-8 w-auto"/>
            </a>
            
            {/* Hamburger Menu Button */}
            <button 
                className="lg:hidden ml-auto" 
                onClick={toggleMenu}
                aria-label="Toggle menu" // Bra praxis för tillgänglighet
            >
                {/* SVG for Hamburger icon */}
                <svg className="w-6 h-6" fill="none" stroke="#14243D" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>

            {/* Desktop Menu Items - Aligned to the right */}
            <div className="hidden lg:flex lg:flex-grow lg:justify-end items-center space-x-4">
                {/* Länkar */}
                <a href="https://convertor.se/" className="text-custom-blue font-century-gothic-pro uppercase text-xs font-bold leading-tight hover:text-gray-300 py-2 px-3">TJÄNSTER</a>
                <a href="https://convertor.se/kundcase/" className="text-custom-blue font-century-gothic-pro uppercase text-xs font-bold leading-tight hover:text-gray-300 py-2 px-3">CASE</a>
                <a href="https://convertor.se/greenhouse/" className="text-custom-blue font-century-gothic-pro uppercase text-xs font-bold leading-tight hover:text-gray-300 py-2 px-3">GREENHOUSE</a>
                <a href="https://convertor.se/insikt/" className="text-custom-blue font-century-gothic-pro uppercase text-xs font-bold leading-tight hover:text-gray-300 py-2 px-3">INSIKT</a>
                <a href="https://convertor.se/karriar/" className="text-custom-blue font-century-gothic-pro uppercase text-xs font-bold leading-tight hover:text-gray-300 py-2 px-3">KARRIÄR</a>
                <a href="https://convertor.se/kontakt/" className="text-custom-blue font-century-gothic-pro uppercase text-xs font-bold leading-tight hover:text-gray-300 py-2 px-3">KONTAKT</a>
            </div>

            {/* Modal for Mobile Menu */}
            <MenuModal isOpen={isMenuOpen} onClose={toggleMenu} />
        </nav>
    );
};

export default Navbar;
