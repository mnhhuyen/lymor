import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';

function ExampleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('Hồng');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(res => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  const handleQuantityChange = (delta) => {
    setQuantity((q) => Math.max(1, q + delta));
  };

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (!product) return <div className="text-center py-20 text-red-500">Không tìm thấy sản phẩm</div>;

  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto py-10 px-4 gap-10">
      {/* Left: Product Image */}
      <div className="basis-[60%] flex items-center justify-center bg-white">
        <img
          src={product.images[0]}
          alt={product.description}
          className="w-full max-w-3xl object-contain rounded-2xl p-6"
        />
      </div>
      {/* Right: Product Info */}
      <div className="basis-[40%] flex flex-col gap-4">
        <div className="text-small text-gray-500 mb-1">Trang chủ / Vòng tay</div>
        <h2 className="text-xl md:text-xl font-semibold flex items-center gap-2">
          {product.description}
          <i className="fas fa-arrow-up-right-from-square text-xs" />
        </h2>
        <div className="text-gray-500 text-small">Mã sản phẩm: {product.name}</div>
        <div className="text-2xl font-semibold text-teal-600">{product.price.toLocaleString('vi-VN')}đ</div>
        {/* Color/Material Options (static for now) */}
        <div className="flex gap-4">
        <div
  className="flex flex-col items-center cursor-pointer rounded-2xl p-1 mb-1 transition-all duration-200 bg-white"
  onClick={() => setSelectedColor('Hồng')}
>
  <img
    src={product.images[0]}
    alt="Hồng"
    className={`w-16 h-16 object-cover mb-1 rounded-xl transition-all duration-200 ${
      selectedColor === 'Hồng'
        ? 'border-2 border-[#2ED8C3]'
        : 'border border-gray-200'
    }`}
  />
  <span className="text-sm">Hồng</span>
</div>
          
<div
  className="flex flex-col items-center cursor-pointer rounded-2xl p-1 mb-1 transition-all duration-200 bg-white"
  onClick={() => setSelectedColor('Vàng')}
>
  <img
    src={product.images[0]}
    alt="Hồng"
    className={`w-16 h-16 object-cover mb-1 rounded-xl transition-all duration-200 ${
      selectedColor === 'Vàng'
        ? 'border-2 border-[#2ED8C3]'
        : 'border border-gray-200'
    }`}
  />
  <span className="text-sm">Vàng</span>
</div>
        </div>
        {/* Quantity Selector */}
        <div className="flex items-center border rounded px-4 py-2 w-full justify-between">
          <span className="mr-4">Số lượng:</span>
          <div className="flex items-center">
          <button
            className="px-2 text-lg text-gray-600 hover:text-black"
            onClick={() => handleQuantityChange(-1)}
            disabled={product.stock === 0}
          >-</button>
          <span className="mx-2 w-6 text-center">{quantity}</span>
          <button
            className="px-2 text-lg text-gray-600 hover:text-black"
            onClick={() => handleQuantityChange(1)}
            disabled={product.stock === 0}
          >+</button>
          </div>
          <span className="ml-6 text-teal-500 text-small">
            {product.stock > 0 ? 'Còn hàng' : 'Hết hàng'}
          </span>
        </div>
        {/* Buy Button Section */}
        <div className="flex items-center gap-4 w-full mb-2">
          <button
            className="flex-1 bg-[#3ed6cb] hover:bg-[#2ed8c3] text-white font-semibold py-3 rounded-xl text-2xl flex flex-col items-center justify-center transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={product.stock === 0}
          >
            MUA NGAY
            <span className="text-sm font-normal mb-1">
              (Giao nhanh từ 2 giờ hoặc nhận tại cửa hàng)
            </span>
          </button>
          <div className="flex items-center justify-center w-20 h-20 border-2 border-[#3ed6cb] rounded-2xl ml-2">
            <i className="fas fa-shopping-cart text-[#3ed6cb] text-4xl"></i>
          </div>
        </div>
        {/* Support Info */}
        <div className="flex flex-col gap-2 text-small text-gray-700 mt-2">
          <div className="flex items-center gap-2">
            <i className="fas fa-phone text-teal-400" />
            Gọi hỗ trợ mua hàng 0123456
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-gray-200 inline-block" />
            Miễn phí tư vấn đá hợp tuổi & năng lượng cá nhân
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-gray-200 inline-block" />
            Đổi miễn phí trong 72h
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-gray-200 inline-block" />
            Miễn phí giao hàng
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-gray-200 inline-block" />
            Trả góp 0%
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-gray-200 inline-block" />
            Bảo hành trọn đời
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExampleProduct;
