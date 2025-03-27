import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../Navbar.css';

function Shopnow() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchBestSellerProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products/bestseller');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching best seller products:', error);
            }
        };

        fetchBestSellerProducts();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center bg-white bestseller-container">
            <button className="px-6 py-2 text-black text-lg mb-8">
                <span className="nav-link bestseller-title">SẢN PHẨM BÁN CHẠY</span>
            </button>
            <div className="bestseller-content flex space-x-4">
                {products.map((product) => (
                    <div key={product.id} className="relative">
                        <div className="bestseller-product">
                            <img
                                src={product.images[0]}
                                alt={product.description || "Product image"}
                                className="bestseller-image"
                            />
                            {/* <div className="absolute top-2 left-2 bg-white px-2 py-1 text-sm font-semibold">
                                SẢN PHẨM BÁN CHẠY   
                            </div> */}
                            <div className="absolute top-2 right-4">
                                <i className="far fa-heart"></i>
                            </div>
                        </div>
                        <div className="text-center bestseller-info">
                            <p className="bestseller-des font-bold">{product.description}</p>
                            <p className="bestseller-code">Mã sản phẩm: {product.name}</p>
                            <p className="text-gray-600 bestseller-price">
                                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Shopnow;
