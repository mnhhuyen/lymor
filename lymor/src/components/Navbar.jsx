import React, { useState } from 'react';
import dropdownData from '../data/dropdownData';
import './Navbar.css'

function Navbar() {
    const [activeDropdown, setActiveDropdown] = useState(null);

    return (
        <div className="relative w-full navbar" style={{ fontFamily: 'Lora, Chivo, Arial, sans-serif' }}>
            {/* Main Navbar Links */}
            <div className="flex justify-center space-x-12 mt-2 mb-6">
                {Object.keys(dropdownData).map((key) => (
                    <div
                        key={key}
                        className="relative"
                        onMouseEnter={() => setActiveDropdown(key)}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <a href="#" className="text-black nav-link nav-text">
                            {key}
                        </a>
                    </div>
                ))}
            </div>

            {activeDropdown && (
                <div
                    className="absolute left-0 top-full w-screen bg-white shadow-lg px-4 z-10 flex justify-around"
                    onMouseEnter={() => setActiveDropdown(activeDropdown)}
                    onMouseLeave={() => setActiveDropdown(null)}
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
    );
}

export default Navbar;
