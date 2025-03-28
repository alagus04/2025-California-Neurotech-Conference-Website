'use client';
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import cntc from "../public/Logo_WhiteBG.png";

export default function NavBar() {
    const path = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const handleNavClick = () => setMenuOpen(false);

    return (
        <nav className="bg-white fixed top-0 left-0 right-0 z-20 shadow-lg px-6 py-2 w-full">
            <div className="max-w-[1200px] mx-auto flex items-center justify-center space-x-12">
                {/* Hamburger Icon for Mobile */}
                <div className="md:hidden absolute left-7 z-30">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-blue-800">
                        {menuOpen ? (
                            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Logo Section */}
                <div className="flex-1 flex justify-start">
                    <Link href="/" className="md:hidden flex items-left ml-5">
                        <Image src={cntc} width={100} height={100} alt="Logo" className="rounded-full" />
                    </Link>
                    <Link href="/" className="hidden md:flex items-center space-x-3 justify-start">
                        <Image src={cntc} width={100} height={100} alt="Logo" className="rounded-full" />
                    </Link>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex space-x-8 text-lg font-medium">
                    <NavItem href="/speakers" label="Speakers" active={path === "/speakers"} />
                    <NavItem href="/event" label="Event" active={path === "/event"} />
                    <NavItem href="/about" label="About Us" active={path === "/about"} />
                    <NavItem href="/sponsors" label="Sponsors" active={path === "/sponsors"} />
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeRJnrSyoLyabjhnkZgt-DE2OGqMhbgSD21fAvwDvInlMGjCA/viewform?usp=dialog" 
                        target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition text-blue-800 py-2">
                        Posters
                    </a>
                </div>

                {/* Register Button (Desktop) */}
                <div className="hidden md:block">
                    <Link 
                        href="https://www.eventbrite.com/e/2025-california-neurotechnology-conference-tickets-1222882617829?aff=oddtdtcreator"
                        className="bg-blue-800 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-yellow-600 transition">
                        Register
                    </Link>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden flex flex-col space-y-4 absolute top-0 left-0 right-0 px-6 pt-2 pb-4 -mt-4 bg-white shadow-lg z-40 w-full text-center">
                    {/* Close Button */}
                    <div className="flex justify-start mt-10">
                        <button onClick={() => setMenuOpen(false)} className="text-blue-800">
                            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Menu Items */}
                    <NavItem href="/speakers" label="Speakers" active={path === "/speakers"} onClick={handleNavClick} />
                    <NavItem href="/event" label="Event" active={path === "/event"} onClick={handleNavClick} />
                    <NavItem href="/about" label="About Us" active={path === "/about"} onClick={handleNavClick} />
                    <NavItem href="/sponsors" label="Sponsors" active={path === "/sponsors"} onClick={handleNavClick} />
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeRJnrSyoLyabjhnkZgt-DE2OGqMhbgSD21fAvwDvInlMGjCA/viewform?usp=dialog" 
                        target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition text-blue-800">
                        Posters
                    </a>
                </div>
            )}
            {/* Register Button for Mobile */}
            <div className="md:hidden absolute top-9 right-4 z-30">
                <Link href="https://www.eventbrite.com/e/2025-california-neurotechnology-conference-tickets-1222882617829?aff=oddtdtcreator" 
                    className="bg-blue-800 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-yellow-600 transition">
                    Register
                </Link>
            </div>
        </nav>
    );
}

// Define TypeScript interface for props
interface NavItemProps {
    href: string;
    label: string;
    active?: boolean;
    onClick?: () => void;
}

// Navigation Item Component with explicit typing
const NavItem: React.FC<NavItemProps> = ({ href, label, active, onClick }) => (
    <Link href={href} onClick={onClick} 
        className={`block px-4 py-2 hover:text-blue-600 transition ${active ? "text-blue-900 font-bold" : "text-blue-800"}`}>
        {label}
    </Link>
);
