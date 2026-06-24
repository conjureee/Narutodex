import SharinganLogo from "../../assets/sharingan.svg";
import ArrowLeft from "../../assets/arrow-left.svg";
import { navLinks } from "../../constants";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full animate-slide-in bg-gray-950/80 backdrop-blur-md border-b border-orange-500/30 z-99">
            <div className="max-w-10xl mx-auto px-5">
                <div className="h-20 flex items-center justify-evenly">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <img
                            src={SharinganLogo}
                            alt="Sharingan"
                            className="w-10 h-10 animate-spin-slow group-hover:scale-110 transition-transform duration-500"
                        />
                        <div>
                            <span className="text-2xl font-black tracking-widest text-white">NARUTODEX</span>
                        </div>
                    </Link>

                    {/* Desktop Links */}
                    <ul className="hidden font-black md:flex items-center gap-8 text-lg">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <Link to={link.path} className="hover:text-orange-500 transition-colors">{link.label}</Link>
                            </li>
                        ))}
                    </ul>

                    {/* Hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-3xl text-orange-500"
                    >
                        <img
                            src={ArrowLeft}
                            alt="Menu Arrow"
                            className={`w-8 h-8 ${isOpen ? '-translate-x-2' : 'rotate-0'} transition-transform hover:scale-110 duration-500 cursor-pointer`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Navbar */}
            {isOpen && (
                <div className="md:hidden bg-gray-900 border-t border-orange-500/30">
                    <ul className="flex flex-col text-xl">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <Link
                                    to={link.path}
                                    className={`flex items-center ${isOpen ? 'translate-x-0' : 'translate-x-100'} gap-4 p-6 rounded-lg hover:bg-orange-500/10 transition-colors group`}
                                >
                                    {/* Image */}
                                    <img
                                        src={`/assets/buttons/${link.label.toLowerCase()}.svg`}
                                        alt={link.label}
                                        className="w-8 h-8 transition-transform group-hover:scale-110"
                                    />

                                    {/* Text */}
                                    <span className="text-white font-black tracking-wider group-hover:text-orange-500 transition-colors">
                                        {link.label}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}