import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../Navbar.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductItem() {
  const [products, setProducts] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  // Update isMobile state based on window width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // adjust breakpoint as needed
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial value
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fetch best seller products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products/');
        console.log('Fetched products:', response.data); // Debugging line to check fetched data
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching best seller products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Slider settings for mobile view with peek effect
  const sliderSettings = {
    // dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: '20%', // Adjust this value to control the "peek"
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white bestseller-container">
      {/* <h1 className="nav-link bestseller-title">BỘ SƯU TẬP</h1> */}
      {isMobile ? (
        // Mobile view using react-slick slider
        <Slider {...sliderSettings} className="bestseller-content">
          {products.map((product) => (
            <div key={product.id} className="new-item relative px-1">
              <div className="bestseller-product">
                <img
                  src={product.images[0]}
                  alt={product.description || "product image"}
                  className="bestseller-image"
                />
              </div>
              <div className="mt-2 text-center bestseller-info">
                <p className="bestseller-des font-bold">{product.description}</p>
                <p className="bestseller-code">Mã bộ sưu tập: {product.name}</p>
                {/* <p className="text-gray-600 bestseller-price">
                  {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
                </p> */}
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        // Desktop view: Grid layout
        <div className="bestseller-content grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="relative">
              <div className="bestseller-product">
                <img
                  src={product.images[0]}
                  alt={product.description || "Product image"}
                  className="bestseller-image"
                />
              </div>
              <div className="mt-2 text-center bestseller-info">
                <p className="bestseller-des font-bold">{product.description}</p>
                <p className="bestseller-code">Mã bộ sưu tập: {product.name}</p>
                {/* <p className="text-gray-600 bestseller-price">
                  {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
                </p> */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductItem;
