import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchWindow from '../components/SearchWindow';
import GeneralPolicy from '../components/policypage/GeneralPolicy';
import PolicyConsultation from '../components/policypage/PolicyConsultation';
import PolicyLoyalty from '../components/policypage/PolicyLoyalty';
import PolicyExchange from '../components/policypage/PolicyExchange';
import PolicyShipping from '../components/policypage/PolicyShipping';
import PolicyWarranty from '../components/policypage/PolicyWarranty';
import { useLocation } from 'react-router-dom';

function Policy() {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const location = useLocation();

    // Function to handle scroll detection
    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        // Always show the navbar when the user is at the top of the screen
        if (currentScrollY === 0) {
            setShowNavbar(true);
        } else if (currentScrollY > lastScrollY) {
            // User is scrolling down
            setShowNavbar(false);
        } else {
            // User is scrolling up
            setShowNavbar(true);
        }

        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    // Listen for any key press or any click event to show the navbar.
    useEffect(() => {
        const handleKeyDown = () => {
            setShowNavbar(true);
        };

        const handleClick = () => {
            setShowNavbar(true);
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('click', handleClick);
        };
    }, []);

    const toggleSearchWindow = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    // Render the correct policy page based on the path
    let PolicyContent;
    switch (location.pathname) {
        case '/policy/consultation':
            PolicyContent = <PolicyConsultation />;
            break;
        case '/policy/loyalty':
            PolicyContent = <PolicyLoyalty />;
            break;
        case '/policy/exchange':
            PolicyContent = <PolicyExchange />;
            break;
        case '/policy/shipping':
            PolicyContent = <PolicyShipping />;
            break;
        case '/policy/warranty':
            PolicyContent = <PolicyWarranty />;
            break;
        default:
            PolicyContent = <GeneralPolicy />;
    }

    return (
        <div>
            <div className={`fixed top-0 w-full z-50 transition-transform duration-300 group-header ${showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
                <Header onSearchClick={toggleSearchWindow} />
                <Navbar />
            </div>

            <SearchWindow isOpen={isSearchOpen} onClose={toggleSearchWindow} />

            <div className="mt-32">
                {PolicyContent}
                <Footer />
            </div>
        </div>
    );
}

export default Policy;
