import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../Navbar.css';

function Shopnew() {
  const [products, setProducts] = useState([]);

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

  return (
    <div className="flex flex-col items-center justify-center bg-white new-container">
      <button className="px-6 py-2 text-black text-lg mb-8">
        <span className="nav-link new-title">SẢN PHẨM MỚI</span>
      </button>
      <div className="new-content flex space-x-4">
        {products.map((product) => (
          <div key={product.id} className="new-item relative">
            <div className="new-product">
              <img 
                src={product.images[0]} 
                alt={product.description || "Product image"} 
                className="object-cover" 
              />
              {/* <div className="absolute top-2 left-2 bg-white px-2 py-1 text-sm font-semibold">
                New
              </div> */}
              {/* <div className="absolute top-2 right-4">
                <i className="far fa-heart"></i>
              </div> */}
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
    </div>
  );
}

export default Shopnew;
