import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../Navbar.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const policies = [
  {
    label: 'TƯ VẤN TRANG SỨC\nTHEO MỆNH',
    img: '/media/image/policy-1.svg',
    route: '/policy/consultation',
  },
  {
    label: 'CHÍNH SÁCH\nKHÁCH HÀNG THÂN THIẾT',
    img: '/media/image/policy-2.svg',
    route: '/policy/loyalty',
  },
  {
    label: 'CHÍNH SÁCH THU ĐỔI',
    img: '/media/image/policy-3.svg',
    route: '/policy/exchange',
  },
  {
    label: 'CHÍNH SÁCH GIAO HÀNG',
    img: '/media/image/policy-4.svg',
    route: '/policy/shipping',
  },
  {
    label: 'CHÍNH SÁCH BẢO HÀNH',
    img: '/media/image/policy-5.svg',
    route: '/policy/warranty',
  },
];

function GeneralPolicy() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
  };

  // Find the selected index based on the current path
  const selected = policies.findIndex(policy => location.pathname === policy.route);

  return (
    <div className="flex flex-col items-center justify-center bg-white">
      {isMobile ? (
        <Slider {...sliderSettings} className="bestseller-content">
          <div className="flex gap-4">
            {policies.map((policy, idx) => (
              <div
                key={policy.label}
                className={`flex flex-col items-center justify-center w-64 h-72 p-6 rounded-3xl bg-[#f6fffd] cursor-pointer shadow transition-all duration-200
                  ${selected === idx ? 'border-2 border-[#3ed6cb]' : 'border border-transparent'}
                `}
                onClick={() => navigate(policy.route)}
              >
                <img src={policy.img} alt={policy.label} className="w-28 h-28 mb-6" />
                <span className={`text-center text-sm whitespace-pre-line ${selected === idx ? 'text-[#3ed6cb] font-semibold' : 'text-black'}`}>
                  {policy.label}
                </span>
              </div>
            ))}
          </div>
        </Slider>
      ) : (
        <div className="grid grid-cols-5 gap-6 py-6">
          {policies.map((policy, idx) => (
            <div
              key={policy.label}
              className={`flex flex-col items-center justify-center w-64 h-72 p-6 rounded-3xl bg-[#f6fffd] cursor-pointer shadow transition-all duration-200
                ${selected === idx ? 'border-2 border-[#3ed6cb]' : 'border border-transparent'}
              `}
              onClick={() => navigate(policy.route)}
            >
              <img src={policy.img} alt={policy.label} className="w-36 h-36 mb-3" />
              <span className={`text-center text-sm whitespace-pre-line ${selected === idx ? 'text-[#3ed6cb] font-semibold' : 'text-black'}`}>
                {policy.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GeneralPolicy;
