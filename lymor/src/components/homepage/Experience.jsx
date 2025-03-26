import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../Navbar.css';

function Experience() {
    return (
        <div className="bg-white py-16">
            <div className="max-w-6xl mx-auto flex justify-around text-center">
                <div>
                    <i className="fas fa-box-open text-2xl mb-4"></i>
                    <h2 className="text-base">TƯ VẤN TRANG SỨC THEO MỆNH</h2>
                </div>
                <div>
                    <i className="fas fa-bell text-2xl mb-4"></i>
                    <h2 className="text-base">MIỄN PHÍ GIAO HÀNG</h2>
                </div>
                <div>
                    <i className="fas fa-calendar-alt text-2xl mb-4"></i>
                    <h2 className="text-base">DỄ DÀNG ĐỔI TRẢ</h2>
                </div>
            </div>
        </div>
    );
}

export default Experience;
