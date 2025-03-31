import React, { useState, useEffect } from 'react';

function ShopByCate() {
  const items = [
    { id: 1, img: "https://placehold.co/300x300", label: "Nhẫn" },
    { id: 2, img: "https://placehold.co/300x300", label: "Dây chuyền" },
    { id: 3, img: "https://placehold.co/300x300", label: "Mặt dây chuyền" },
    { id: 4, img: "https://placehold.co/300x300", label: "Khuyên tai" },
    { id: 5, img: "https://placehold.co/300x300", label: "Lắc tay" },
    { id: 6, img: "https://placehold.co/300x300", label: "Lắc chân" },
  ];

  // startIndex indicates the leftmost visible item.
  const [startIndex, setStartIndex] = useState(0);
  // visibleCount will be 4 on desktop and 2 on mobile.
  const [visibleCount, setVisibleCount] = useState(4);

  // Detect screen width and update visibleCount accordingly.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(2);
      } else {
        setVisibleCount(4);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // set initial value
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    if (startIndex < items.length - visibleCount) {
      setStartIndex(startIndex + 1);
    } else {
      setStartIndex(0);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    } else {
      setStartIndex(items.length - visibleCount);
    }
  };

  return (
    <div className="category-container flex flex-col items-center justify-center bg-white">
      <h1 className="nav-link category-title">TRANG SỨC</h1>
      <p className="text-gray-600 mb-4 md:mb-10 category-subtitle">
        Hòa quyện nét đẹp sang trọng cùng giá trị bền vững, ghi dấu ấn riêng cho người sở hữu.
      </p>
      <div className="relative w-full">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(startIndex * 100) / visibleCount}%)`,
            }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 px-2"
                style={{ width: `${100 / visibleCount}%` }}
              >
                <img src={item.img} alt={item.label} className="w-full" />
                <p className="mt-2 font-bold text-center item-label">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute left-[-20px] md:left-[-40px] top-1/2 transform -translate-y-1/2 bg-gray-200 w-5 h-5 md:w-10 md:h-10 flex items-center justify-center rounded-full shadow-md hover:bg-gray-300 z-10"
          onClick={handlePrev}
        >
          &lt;
        </button>
        <button
          className="absolute right-[-20px] md:right-[-40px] top-1/2 transform -translate-y-1/2 bg-gray-200 w-5 h-5 md:w-10 md:h-10 flex items-center justify-center rounded-full shadow-md hover:bg-gray-300 z-10"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default ShopByCate;
