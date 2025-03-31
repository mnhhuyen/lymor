import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../Navbar.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Shopnew() {
  const [products, setProducts] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  // Update isMobile based on window width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // adjust breakpoint as needed
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fetch products on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products/newest');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
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
    centerPadding: '15%', // Shows part of the adjacent slide
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white new-container">
      <h1 className="nav-link new-title">SẢN PHẨM MỚI</h1>
      {isMobile ? (
        // Mobile view using slider with peek effect
        <Slider {...sliderSettings} className="new-content">
          {products.map((product) => (
            <div key={product.id} className="new-item relative px-1">
              <div className="new-product">
                <img 
                  src={product.images[0]} 
                  alt={product.description || "Product image"} 
                  className="object-cover w-full" 
                />
              </div>
              <div className="mt-2 text-center new-info">
                <p className="new-des font-bold">{product.description}</p>
                <p className="new-code">Mã sản phẩm: {product.name}</p>
                <p className="new-price text-gray-600">
                  {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        // Desktop view (grid layout)
        <div className="new-content flex space-x-2 lg:space-x-4">
          {products.map((product) => (
            <div key={product.id} className="new-item relative">
              <div className="new-product">
                <img 
                  src={product.images[0]} 
                  alt={product.description || "Product image"} 
                  className="object-cover w-full" 
                />
              </div>
              <div className="mt-2 text-center new-info">
                <p className="new-des font-bold">{product.description}</p>
                <p className="new-code">Mã sản phẩm: {product.name}</p>
                <p className="new-price text-gray-600">
                  {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Shopnew;
