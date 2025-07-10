import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../Navbar.css';

function ProductItem() {
  const [products, setProducts] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products/');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  // Breadcrumb and filter UI
  const renderFilters = () => (
    <div className="mb-8">
      {/* Breadcrumb */}
      <div className="text-small font-normal mb-6">Trang chủ / Vòng tay</div>
      {/* Filter row */}
      <div className="flex flex-wrap items-center gap-x-12 gap-y-4 text-small font-normal">
        <span className="mr-2">Bộ lọc:</span>
        <div className="flex items-center gap-x-12 gap-y-4 flex-wrap">
          <div className="flex items-center">
            <select className="appearance-none bg-transparent focus:outline-none cursor-pointer text-small">
              <option>Khoảng giá</option>
              <option value="desc">Từ cao xuống thấp</option>
              <option value="asc">Từ thấp lên cao</option>
            </select>
            <span className="pl-2 pointer-events-none flex items-center">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M6 9l6 6 6-6" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
</span>
          </div>
          <div className="flex items-center">
            <select className="appearance-none bg-transparent focus:outline-none cursor-pointer text-small">
              <option>Đá quý</option>
              <option>Ruby</option>
              <option>Sapphire</option>
              <option>Peridot</option>
              <option>Topaz</option>
              <option>Spinel</option>
              <option>Tsavorite Garnet</option>
              <option>Kim cương Moissanite</option>
              <option>Ngọc trai</option>
            </select>
            <span className="pl-2 pointer-events-none flex items-center">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M6 9l6 6 6-6" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
</span>
          </div>
          <div className="flex items-center">
            <select className="appearance-none bg-transparent focus:outline-none cursor-pointer text-small">
              <option>Chất liệu</option>
              <option>Vàng 10K/14K/18K</option>
              <option>Bạch kim (Platinum)</option>
              <option>Xi bạch kim (Platinum-plated Silver)</option>
              <option>Vàng trắng</option>
              <option>Vàng Hồng</option>
            </select>
            <span className="pl-2 pointer-events-none flex items-center">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M6 9l6 6 6-6" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
</span>
          </div>
        </div>
      </div>
    </div>
  );

  // Section title and CTA
  const renderSectionTitle = () => (
    <div className="flex flex-col items-center justify-center w-full py-8">
      <img
        src="/media/image/image-video.svg"
        alt="Bộ sưu tập ngọc trai"
        className="max-w-xl w-full mb-8"
        style={{ objectFit: 'cover' }}
      />
      <h4 className="md:text-2xl font-semibold tracking-wide uppercase text-center mb-4">
        BỘ SƯU TẬP NGỌC TRAI
      </h4>
      <a
        href="#"
        className="text-md underline underline-offset-4 hover:text-blue-700 transition text-center"
      >
        Khám phá ngay
      </a>
    </div>
  );

  // Product card
  const renderProductCard = (product) => (
    <Link to={`/products/${product.id}`} key={product.id}>
      <div className="relative">
        <div className="bestseller-product">
          <img
            src={product.images[0]}
            alt={product.description || 'Product image'}
            className="bestseller-image"
          />
        </div>
        <div className="mt-2 text-center bestseller-info">
          <p className="bestseller-des font-bold">{product.description}</p>
          <p className="bestseller-code">Mã sản phẩm: {product.name}</p>
          <p className="text-gray-600 bestseller-price">
            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
          </p>
        </div>
      </div>
    </Link>
  );

  // Video placeholder card
  const renderVideoCard = () => (
    <div className="flex flex-col items-center justify-center w-full py-8">
      <img
        src="/media/image/image-video.svg"
        alt="Bộ sưu tập ngọc trai"
        className="max-w-xl w-full mb-8"
        style={{ objectFit: 'cover' }}
      />
      </div>
  );

  // Custom layout: 6 products, section, 4 products, video, 2 products
  let productCards = [];
  // First 6 products
  products.slice(0, 6).forEach((product) => {
    productCards.push(renderProductCard(product));
  });
  // Section title cell (not video)
  productCards.push(
    <div key="section-title" className="col-span-2">
      {renderSectionTitle()}
    </div>
  );
  // Next 4 products
  products.slice(6, 10).forEach((product) => {
    productCards.push(renderProductCard(product));
  });
  // Video placeholder cell
  productCards.push(
    <div key="video-placeholder-2" className="col-span-2">
      {renderVideoCard()}
    </div>
  );
  // Last 2 products
  products.slice(10, 12).forEach((product) => {
    productCards.push(renderProductCard(product));
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {renderFilters()}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {productCards}
      </div>
    </div>
  );
}

export default ProductItem;
