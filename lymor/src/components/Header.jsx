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
            <div className="flex justify-between items-center p-4 header" style={{ fontFamily: 'Lora, Chivo, Arial, sans-serif' }}>
                <div className="flex items-center text-gray-600 contact-text">
                    <i className="fas fa-phone cursor-pointer"></i> <span className="mx-2">028 1234 5678</span> <span>|</span>
                    <i className="fas fa-map-marker-alt mx-2"></i> <span> Cửa hàng</span>
                </div>
                <div className="flex items-center text-4xl header-main">
                    <img src="media/image/logo.svg" alt="Logo" className="header-logo" />
                    <Link to="/" className="text-logo hover:text-gray-800 ml-2 font-bold">LYMOR</Link>
                </div>
                <div className="flex items-center space-x-4 text-gray-600 header-icons">
                    <i className="fas fa-search cursor-pointer" onClick={onSearchClick}></i>
                    <i className="fas fa-user"></i>
                    <i className="fas fa-shopping-cart"></i>
                </div>
            </div>
        </div>
    );
}

export default Header;
