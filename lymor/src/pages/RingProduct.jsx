import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Experience from '../components/homepage/Experience'
import Shopnow from '../components/homepage/Shopnow';
import Shopnew from '../components/homepage/Shopnew';
import Vidintro from '../components/homepage/Vidintro';
import ShopByCate from '../components/homepage/Shopbycategory';
import Stories from '../components/homepage/Stories';
import Contact from '../components/contact/Contact';
import SearchWindow from '../components/SearchWindow';
import Exampleproduct from '../components/product/Exampleproduct';


function RingProduct() {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    // Function to handle scroll detection
    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
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

    const toggleSearchWindow = () => {
        setIsSearchOpen(!isSearchOpen);
    };
    return (
        <div>
            <div className={`fixed top-0 w-full z-50 transition-transform duration-300 bg-white ${showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
                <Header />
                <Navbar />
            </div>

            <SearchWindow isOpen={isSearchOpen} onClose={toggleSearchWindow} />

            <div className="mt-40">
                <Exampleproduct />
            </div>

            <Footer />
        </div>
    );
}

export default RingProduct;
