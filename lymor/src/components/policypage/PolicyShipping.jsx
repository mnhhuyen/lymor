import React from 'react';

const PolicyShipping = () => {

  return (
    <div>
      <div className="mt-44 px-4 pb-12 bg-white">
        {/* Title and intro */} 
        <div className="max-w-6xl mx-auto mb-16">
          <h1 className="text-2xl md:text-3xl text-center mb-4 uppercase">Đưa giá trị đến tận tay – Dù bạn ở bất kỳ đâu.</h1>
          <p className="text-center text-gray-900 mb-8 text-[0.95rem]">Tại Lymor, mỗi món trang sức được gửi đi không chỉ mang theo vẻ đẹp phong thủy mà còn là lời cam kết về chất lượng và sự trân trọng dành cho khách hàng. Chúng tôi xây dựng chính sách giao hàng tận tâm – để hành trình từ xưởng chế tác đến tay bạn luôn trọn vẹn.</p>
        </div>
        
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center mb-16">
              <div className="flex flex-col justify-center">
                <p className="text-xl md:text-2xl mb-4 pl-5 uppercase">🚚 Miễn phí giao hàng toàn quốc</p>
                <ul className="list-disc pl-9 space-y-2 text-gray-900 text-[0.825rem]">
                    <li>
                    Áp dụng cho mọi đơn hàng, không phân biệt giá trị hay khu vực nhận hàng.
                    </li>
                    <li>
                    Dù bạn ở nội thành thành phố lớn hay khu vực tỉnh xa, Lymor vẫn miễn phí giao hàng tận nơi trên toàn quốc.
                    </li>
                </ul>
              </div>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center mb-16">
              <div className="flex flex-col justify-center w-full">
                <p className="text-xl md:text-2xl mb-4 pl-5 uppercase">⏱️ THỜI GIAN GIAO HÀNG DỰ KIẾN</p>
                <div className="rounded-2xl py-8 px-4 md:px-12 max-w-6xl mx-auto mb-4" style={{ backgroundColor: '#f2fdfd' }}>
                  {/* Header row */}
                  <div className="flex flex-row text-black text-lg md:text-2xl mb-6">
                    <div className="flex-1">KHU VỰC</div>
                    <div className="flex-1">THỜI GIAN DỰ KIẾN</div>
                  </div>
                  {/* Colored border below header */}
                  <div className="w-full h-px mb-6" style={{ backgroundColor: '#77cbc3' }}></div>
                  {/* Data rows */}
                  <div className="flex flex-row items-center mb-4">
                    <div className="flex-1 font-bold text-black text-base md:text-large">Nội thành Hà Nội & TP.HCM</div>
                    <div className="flex-1 text-black text-base md:text-large">1 – 2 ngày làm việc</div>
                  </div>
                  <div className="flex flex-row items-center mb-4">
                    <div className="flex-1 font-bold text-black text-base md:text-large">Các tỉnh, thành khác</div>
                    <div className="flex-1 text-black text-base md:text-large">2 – 4 ngày làm việc</div>
                  </div>
                  <div className="flex flex-row items-center mb-6">
                    <div className="flex-1 font-bold text-black text-base md:text-large">Khu vực miền núi, hải đảo</div>
                    <div className="flex-1 text-black text-base md:text-large">3 – 6 ngày làm việc</div>
                  </div>
                  {/* Colored border at the bottom */}
                  <div className="w-full h-px mb-4" style={{ backgroundColor: '#77cbc3' }}></div>
                  {/* Note below the table */}
                  <div className="text-black text-base md:text-large pl-2">Lưu ý: Thời gian giao hàng có thể thay đổi tùy thuộc vào điều kiện thời tiết, khu vực nhận hàng hoặc yêu cầu cá nhân hoá thiết kế của khách hàng.</div>
                </div>
              </div>
        </div>
        {/* Image and conditions */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center mb-16">
              <div className="flex flex-col justify-center">
                <p className="text-xl md:text-2xl mb-4 pl-5 uppercase">📦 Quy trình đóng gói & vận chuyển chuyên nghiệp</p>
                <ul className="list-disc pl-9 space-y-2 text-gray-900 text-[0.825rem]">
                    <li>
                    Mỗi sản phẩm đều được đóng gói chắc chắn, thẩm mỹ và bảo mật, kèm theo hộp đựng cao cấp từ Lymor.
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
        {/* Footer message */}
        <div className="text-center mt-16 font-bold text-lg uppercase" style={{ color: '#80d8d0' }}>
        Lymor – Gửi đến bạn không chỉ là một món trang sức, mà là sự tận tâm và <br />
        trân trọng trong từng chi tiết.
          <div className="flex justify-center mt-4">
            <img src="/media/image/policy-consul3.png" className="w-12 h-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyShipping; 