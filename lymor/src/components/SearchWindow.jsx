import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function SearchWindow({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="mt-40 flex justify-between items-start">
            <div className="ml-20 flex-1">
                <div className="relative w-2/3">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full text-2xl text-gray-500 border-b border-gray-300 focus:outline-none"
                    />
                    <i className="fas fa-search absolute right-0 top-0 mt-2 text-lg text-black"></i>
                </div>
            </div>
            <div class="w-1/3 flex flex-col items-end mr-20">
                <i className="fas fa-times close-icon cursor-pointer" onClick={onClose}></i>
                <div class="mt-8">
                    <div class="flex justify-between">
                        <div class="mr-8">
                            <p class="font-bold">Discover</p>
                            <p>Jewelry</p>
                            <p>Gifts</p>
                            <p>Store Locator</p>
                        </div>
                        <div>
                            <p class="font-bold">Need Help?</p>
                            <p>Contact <span class="font-bold underline">Client Care</span></p>
                            <p>Call <span class="font-bold underline">800 843 3269</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchWindow;
