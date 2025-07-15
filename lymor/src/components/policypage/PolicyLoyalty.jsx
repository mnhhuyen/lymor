import React from 'react';

const PolicyLoyalty = () => {

  return (
    <div>
      <div className="mt-44 px-4 pb-12 bg-white">
        {/* Title and intro */}
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-3xl text-center mb-4 uppercase">CHÍNH SÁCH KHÁCH HÀNG THÂN THIẾT</h1>
          <p className="text-center text-gray-900 mb-8 text-[0.95rem]">Tại Lymor, chúng tôi không chỉ tạo ra những thiết kế trang sức mang vẻ đẹp hài hòa giữa thẩm mỹ và phong thủy, mà còn mong muốn kiến tạo một mối quan hệ gắn bó, bền chặt với từng khách hàng. Chính sách Khách hàng thân thiết là lời cảm ơn sâu sắc dành cho sự tin tưởng và yêu thương mà quý khách đã trao gửi.</p>
        </div>
        {/* Table of benefits */}
        <div className="rounded-xl py-8 px-4 md:px-12 max-w-6xl mx-auto mb-16" style={{ backgroundColor: '#f2fdfd' }}>
          <div className="flex flex-col md:flex-row font-bold border-b border-b-[#77cbc3] pb-2 mb-2">
            <div className="flex-1 text-cyan-700">QUYỀN LỢI</div>
            <div className="flex-1 text-cyan-700">CHI TIẾT</div>
          </div>
          <div className="flex flex-col md:flex-row border-b border-gray-200 py-2">
            <div className="flex-1 font-semibold">Giảm 20% giá trị đá quý trong đơn kế tiếp</div>
            <div className="flex-1 text-gray-700 text-sm">- Áp dụng cho mọi khách hàng đã từng mua bất kỳ sản phẩm nào tại Lymor.<br/>- Không phân biệt giá trị đơn hàng trước đó.</div>
          </div>
          <div className="flex flex-col md:flex-row border-b border-gray-200 py-2">
            <div className="flex-1 font-semibold">Không giới hạn số lần áp dụng</div>
            <div className="flex-1 text-gray-700 text-sm">- Chỉ cần có thông tin mua hàng lưu trên hệ thống.<br/>- Ưu đãi 20% cho đá quý sẽ tự động áp dụng cho mọi đơn hàng tiếp theo.</div>
          </div>
          <div className="flex flex-col md:flex-row py-2">
            <div className="flex-1 font-semibold">Ưu đãi đặc quyền dành cho thành viên thân thiết</div>
            <div className="flex-1 text-gray-700 text-sm">- Tham gia chương trình khuyến mãi sớm hơn.<br/>- Ưu tiên thiết kế và chế tác theo yêu cầu.<br/>- Cập nhật sớm các bộ sưu tập mới và sự kiện đặc biệt.</div>
          </div>
        </div>
        {/* Image and conditions */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center mb-8">
          <img src="/media/image/policy-loyal.png" alt="Loyalty Policy" className="md:w-1/2 w-full shadow-lg object-cover" />
          <div className="md:w-1/2 flex flex-col justify-center">
            <p className="text-xl md:text-2xl mb-4 pl-5 uppercase">Điều kiện tham gia chương trình</p>
            <ul className="list-disc pl-9 space-y-2 text-gray-900 text-[0.825rem]">
                <li>Khách hàng đã từng mua sản phẩm tại Lymor và cung cấp đầy đủ thông tin (họ tên, số điện thoại, email hoặc tài khoản mạng xã hội).</li>
                <li>Ưu đãi chỉ áp dụng cho phần đá quý trong đơn hàng (không áp dụng cho công chế tác hoặc phụ kiện đi kèm).</li>
                <li>Không áp dụng đồng thời với một số chương trình ưu đãi khác, trừ khi có thông báo cụ thể.</li>
            </ul>
          </div>
        </div>
        {/* Footer message */}
        <div className="text-center mt-16 font-bold text-lg uppercase" style={{ color: '#80d8d0' }}>
        Chúng tôi luôn mong muốn được đồng hành cùng bạn – không chỉ hôm nay, <br />
        mà còn trong suốt hành trình tìm kiếm vẻ đẹp, ý nghĩa và năng lượng tích cực <br />
        từ những thiết kế tramg sức độc bản.
          <div className="flex justify-center mt-4">
            <img src="/media/image/policy-consul3.png" className="w-12 h-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyLoyalty; 