import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import SearchWindow from './SearchWindow';

function Header({ onSearchClick }) {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const toggleSearchWindow = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    return (
        <div className="header-container">
            <div className="grid grid-cols-12 items-center pt-2 md:pt-4 pl-4 pr-4 md:pb-4 header" style={{ fontFamily: 'Lora, Chivo, Arial, sans-serif' }}>
                <div className="col-span-3 flex flex-wrap items-center text-gray-600 contact-text">
                    <i className="fas fa-phone cursor-pointer"></i>
                    <span className="md:mx-2">028 1234 5678</span>
                    {/* Show divider on desktop, hide on mobile */}
                    <span className="hidden lg:inline mx-2">|</span>
                    {/* Show line break on mobile */}
                    <span className="block w-full lg:hidden"></span>
                    <i className="fas fa-map-marker-alt lg:mx-2"></i>
                    <span className="shop-address"> Cửa hàng</span>
                </div>

                <div className="col-span-6 flex items-center justify-center header-main">
                    <img src="media/image/logo.svg" alt="Logo" className="header-logo" />
                    <Link to="/" className="text-logo hover:text-gray-800 ml-2 font-bold">LYMOR</Link>
                </div>

                <div className="col-span-3 flex items-center justify-end space-x-4 text-gray-600 header-icons">
                    <i className="fas fa-search cursor-pointer" onClick={onSearchClick}></i>
                    <i className="fas fa-user"></i>
                    <i className="fas fa-shopping-cart"></i>
                </div>
            </div>
        </div>
    );
}

export default Header;
