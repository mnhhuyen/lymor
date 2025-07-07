import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom'
import dropdownData from '../data/dropdownData';
import './Navbar.css';

function Navbar() {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

    const timerRef = useRef(null);

    // When mouse enters a key or the dropdown, clear any pending hide timer
    const handleMouseEnter = (key) => {
        clearTimeout(timerRef.current);
        setActiveDropdown(key);
    };

    // When mouse leaves, set a timer to hide the dropdown after a short delay
    const handleMouseLeave = () => {
        timerRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 200);
    };

    // for mobile:
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
        if (isMobileMenuOpen) {
            setActiveMobileDropdown(null);
        }
    };

    const handleMobileDropdownClick = (key) => {
        if (activeMobileDropdown === key) {
            setActiveMobileDropdown(null);
        } else {
            setActiveMobileDropdown(key);
        }
    };

    return (
        <div>
            <div className="relative w-full navbar" style={{ fontFamily: 'Lora, Chivo, Arial, sans-serif' }}>
                {/* Main Navbar Links */}
                <div className="hidden md:flex justify-center space-x-16 mb-6">
                    {Object.keys(dropdownData).map((key) => (
                        <div
                            key={key}
                            className="relative"
                            onMouseEnter={() => handleMouseEnter(key)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {key === 'BỘ SƯU TẬP' ? (
                                // this one goes straight to /collections
                                <Link to="/collections" className="text-black nav-link nav-text">
                                    {key}
                                </Link>
                            ) : (
                                // everything else still behaves like before
                                <a href="#" className="text-black nav-link nav-text">
                                    {key}
                                </a>
                            )}
                        </div>
                    ))}
                </div>

                {/* Dropdown container */}
                {activeDropdown && (
                    <div
                        className="absolute left-0 top-full w-screen shadow-lg px-4 z-10 flex justify-around mt-6 nav-dropdown"
                        onMouseEnter={() => handleMouseEnter(activeDropdown)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {dropdownData[activeDropdown].map((section, index) => (
                            <div key={index} className="w-1/2 p-4">
                                <div className="font-bold mb-2">{section.title}</div>
                                <ul>
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex} className="mb-2">
                                            <a href={link.href} className="text-black text-sm nav-link">{link.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="flex md:hidden justify-between items-center pr-4 pb-2 pl-4">
                <button onClick={toggleMobileMenu}>
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            {
                isMobileMenuOpen && (
                    <div className="mobile-menu md:hidden bg-white p-4">
                        {Object.keys(dropdownData).map((key) => (
                            <div key={key} className="mb-4 border-b pb-2">
                                {key === 'BỘ SƯU TẬP' ? (
                                    <Link
                                        to="/collections"
                                        className="text-left text-black nav-link nav-text block"
                                    >
                                        {key}
                                    </Link>
                                ) : (
                                    <button
                                        className="text-left text-black nav-link nav-text block"
                                        onClick={() => handleMobileDropdownClick(key)}
                                    >
                                        {key}
                                    </button>
                                )}
                                {activeMobileDropdown === key && (
                                    <div className="mt-2 pl-4">
                                        {dropdownData[key].map((section, index) => (
                                            <div key={index} className="mb-4">
                                                <div className="font-semibold">{section.title}</div>
                                                <ul>
                                                    {section.links.map((link, linkIndex) => (
                                                        <li key={linkIndex}>
                                                            <a href={link.href} className="text-black text-sm">
                                                                {link.label}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    );
}

export default Navbar;
