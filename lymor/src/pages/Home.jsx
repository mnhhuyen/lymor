import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Experience from '../components/homepage/Experience';
import Shopnow from '../components/homepage/Shopnow';
import Shopnew from '../components/homepage/Shopnew';
import Vidintro from '../components/homepage/Vidintro';
import ShopByCate from '../components/homepage/Shopbycategory';
import Stories from '../components/homepage/Stories';
import SearchWindow from '../components/SearchWindow';


function Home() {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

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

    return (
        <div>
            <div className={`fixed top-0 w-full z-50 transition-transform duration-300 group-header ${showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
                <Header onSearchClick={toggleSearchWindow} />
                <Navbar />
            </div>

            <SearchWindow isOpen={isSearchOpen} onClose={toggleSearchWindow} />

            {/* video introduction*/}

            <div className="md:mt-32"> {/* or use pt-16 on Vidintro itself */}
                <Vidintro />
            </div>

            {/*shop now some special item*/}
            <Shopnew />
            <Shopnow />
            <ShopByCate />
            <Stories />
            <Experience />
            <Footer />
        </div>
    );
}

export default Home;
