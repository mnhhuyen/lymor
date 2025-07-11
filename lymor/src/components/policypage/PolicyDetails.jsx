import React from "react";
import { useParams, Link } from "react-router-dom";

// Example policy data (replace with real data or import as needed)
const policyDetails = {
  shipping: {
    title: "Chính sách vận chuyển",
    content: "Nội dung chi tiết về chính sách vận chuyển sẽ được hiển thị ở đây."
  },
  return: {
    title: "Chính sách đổi trả",
    content: "Nội dung chi tiết về chính sách đổi trả sẽ được hiển thị ở đây."
  },
  warranty: {
    title: "Chính sách bảo hành",
    content: "Nội dung chi tiết về chính sách bảo hành sẽ được hiển thị ở đây."
  },
  payment: {
    title: "Chính sách thanh toán",
    content: "Nội dung chi tiết về chính sách thanh toán sẽ được hiển thị ở đây."
  },
  privacy: {
    title: "Chính sách bảo mật",
    content: "Nội dung chi tiết về chính sách bảo mật sẽ được hiển thị ở đây."
  }
};

const PolicyDetails = () => {
  const { policyId } = useParams();
  const policy = policyDetails[policyId];

  if (!policy) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Chính sách không tồn tại</h2>
        <Link to="/policy" className="text-blue-500 underline">Quay lại trang chính sách</Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">{policy.title}</h1>
      <div className="text-lg leading-relaxed mb-8">{policy.content}</div>
      <div className="text-center">
        <Link to="/policy" className="text-blue-500 underline">← Quay lại trang chính sách</Link>
      </div>
    </div>
  );
};

export default PolicyDetails; 