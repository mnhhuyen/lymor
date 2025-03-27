import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../Navbar.css';

function Experience() {
    return (
        <div className="bg-white sm:py-8 md:py-16 experience-container">
            <div className="max-w-6xl mx-auto grid grid-cols-3 md:gap-8 text-center experience-content">
                <div>
                    <i className="fas fa-box-open md:text-2xl mb-4"></i>
                    <h2 className="text-experience">TƯ VẤN TRANG SỨC THEO MỆNH</h2>
                </div>
                <div>
                    <i className="fas fa-bell md:text-2xl mb-4"></i>
                    <h2 className="text-experience">MIỄN PHÍ GIAO HÀNG</h2>
                </div>
                <div>
                    <i className="fas fa-calendar-alt md:text-2xl mb-4"></i>
                    <h2 className="text-experience">DỄ DÀNG ĐỔI TRẢ</h2>
                </div>
            </div>
        </div>
    );
}

export default Experience;
