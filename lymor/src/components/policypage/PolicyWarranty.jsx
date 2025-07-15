import React from 'react';

const PolicyWarranty = () => {
    return (
        <div>
          <div className="mt-44 px-4 pb-12 bg-white">
            {/* Title and intro */} 
            <div className="max-w-6xl mx-auto mb-16">
              <h1 className="text-2xl md:text-3xl text-center mb-4 uppercase">Đồng hành dài lâu – Gìn giữ vẻ đẹp vĩnh cửu cùnG bạn.</h1>
              <p className="text-center text-gray-900 mb-8 text-[0.95rem]">Tại Lymor, chúng tôi hiểu rằng mỗi món trang sức không chỉ có giá trị vật chất mà còn chứa đựng cảm xúc và câu chuyện cá nhân của người sở hữu. Chính vì vậy, chính sách bảo hành của chúng tôi được xây dựng để đồng hành trọn đời cùng sản phẩm và quý khách hàng</p>
            </div>
    
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center mb-16">
                  <div className="flex flex-col justify-center">
                    <p className="text-xl md:text-2xl mb-4 pl-5 uppercase">🔧 Bảo hành size số trọn đời</p>
                    <ul className="list-disc pl-9 space-y-2 text-gray-900 text-[0.825rem]">
                        <li>
                        Lymor hỗ trợ miễn phí điều chỉnh kích thước cho các sản phẩm không vừa tay hoặc có lỗi về size trong quá trình sử dụng.
                        </li>
                        <li>
                        Áp dụng cho tất cả các sản phẩm nhẫn, vòng tay hoặc trang sức có thể thay đổi kích thước.
                        </li>
                        <li>
                        Mỗi lần điều chỉnh đều được kiểm tra và thực hiện bởi đội ngũ chế tác chuyên nghiệp, đảm bảo tính thẩm mỹ và chất lượng ban đầu.
                        </li>
                    </ul>
                  </div>
            </div>
            {/* Image and conditions */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center mb-16">
                  <div className="flex flex-col justify-center">
                    <p className="text-xl md:text-2xl mb-4 pl-5 uppercase">✨ Dịch vụ làm mới sản phẩm trọn đời</p>
                    <ul className="list-disc pl-9 space-y-2 text-gray-900 text-[0.825rem]">
                        <li>
                        Lymor hỗ trợ miễn phí điều chỉnh kích thước cho các sản phẩm không vừa tay hoặc có lỗi về size trong quá trình sử dụng.
                        </li>
                        <li>
                        Cung cấp mã vận đơn để khách hàng dễ dàng theo dõi lộ trình vận chuyển.
                        </li>
                        <li>
                        Cam kết hỗ trợ xử lý nhanh chóng nếu có vấn đề phát sinh trong quá trình giao nhận.
                        </li>
                    </ul>
                  </div>
            </div>

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center mb-16">
                  <div className="flex flex-col justify-center">
                    <p className="text-xl md:text-2xl mb-4 pl-5 uppercase">🔄 1 đổi 1 trong 7 ngày đầu tiên</p>
                    <ul className="list-disc pl-9 space-y-2 text-gray-900 text-[0.825rem]">
                        <li>
                        Trong vòng 7 ngày kể từ ngày nhận hàng, nếu sản phẩm đá quý xuất hiện lỗi kỹ thuật từ nhà sản xuất, Lymor cam kết:
                        </li>
                        <li>
                        Các lỗi được áp dụng gồm: lỏng/rụng đá, lỗi chế tác, cong vênh khung, hở mối nối…
                        </li>
                        <li>
                        Điều kiện: Sản phẩm còn đầy đủ hóa đơn và chưa qua tác động sửa chữa bên ngoài.
                        </li>
                    </ul>
                  </div>
            </div>

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center mb-16">
                  <div className="flex flex-col justify-center">
                    <p className="text-xl md:text-2xl mb-4 pl-5 uppercase">📌 Lưu ý chung về bảo hành</p>
                    <ul className="list-disc pl-9 space-y-2 text-gray-900 text-[0.825rem]">
                        <li>
                        Chính sách không áp dụng với trường hợp sản phẩm bị hư hại do va đập mạnh, rơi vỡ, tiếp xúc hóa chất hoặc do bảo quản không đúng cách.
                        </li>
                        <li>
                        Một số sản phẩm thiết kế đặc biệt hoặc mang tính cá nhân hoá cao sẽ được tư vấn điều kiện bảo hành cụ thể kèm theo khi giao hàng.
                        </li>
                        <li>
                        Lymor có quyền từ chối bảo hành nếu sản phẩm đã bị can thiệp bởi đơn vị bên ngoài không thuộc hệ thống Lymor.
                        </li>
                    </ul>
                  </div>
            </div>
            {/* Footer message */}
            <div className="text-center mt-16 font-bold text-lg uppercase" style={{ color: '#80d8d0' }}>
            Mỗi sản phẩm tại Lymor đều được chúng tôi đồng hành và chăm sóc lâu dài,<br />
            vì chúng tôi tin rằng: vẻ đẹp thật sự là thứ cần được gìn giữ qua thời gian.
              <div className="flex justify-center mt-4">
                <img src="/media/image/policy-consul3.png" className="w-12 h-12" />
              </div>
            </div>
          </div>
        </div>
      );
    };

export default PolicyWarranty; 