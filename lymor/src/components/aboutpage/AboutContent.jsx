import React from 'react';

const AboutContent = () => {
  return (
      <div className="mt-44 px-4 pb-12 bg-white">

        <div className="flex flex-col md:flex-row md:space-x-16 items-center max-w-6xl mx-auto mb-16">
        <img
          className="w-3/5 object-cover"
          height={400}
          src="/media/image/img-about1.png"
          width={600}
        />
        <div className="w-full md:w-2/5">
          <p className="text-black leading-tight mb-5 uppercase introtext-big">
            XÂY DỰNG NIỀM TIN
          </p>
          <p className="text-black introtext-small">
          Lymor là thương hiệu trang sức đá quý được xây dựng dựa trên sự tử tế, minh bạch và cam kết đồng hành cùng khách hàng.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-16 items-center max-w-6xl mx-auto mb-16">
        <img
          className="w-3/5 object-cover"
          height={400}
          src="/media/image/img-about2.png"
          width={600}
        />
        <div className="w-full md:w-2/5">
          <p className="text-black leading-tight mb-5 uppercase introtext-big">
            CÁ NHÂN HOÁ DỊCH VỤ
          </p>
          <p className="text-black introtext-small">
          Chúng tôi tập trung vào trải nghiệm cá nhân hóa – từ tư vấn chọn đá theo nhu cầu năng lượng, thiết kế theo yêu cầu riêng đến chế tác thủ công bởi đội ngũ thợ kim hoàn lành nghề.
          </p>
        </div>
      </div>

        {/* Tư vấn thiết kế theo yêu cầu */}
        <div className="flex flex-col md:flex-row md:space-x-16 items-center max-w-6xl mx-auto mb-16">
        
        <div className="w-full md:w-2/5">
          <p className="text-black leading-tight mb-5 uppercase introtext-big">
            CHẤT LƯỢNG ĐẢM BẢO
          </p>
          <p className="text-black introtext-small">
          Mỗi sản phẩm đều được kiểm định rõ ràng về chất lượng, nguồn gốc và cam kết bảo hành lâu dài. Chúng tôi hiểu rằng, một món trang sức không chỉ cần đẹp, mà còn cần <span className="font-bold">đáng tin cậy</span> và luôn có người đồng hành sau khi mua.
          </p>
        </div>
        <img
          className="w-3/5 object-cover"
          height={400}
          src="/media/image/img-about3.png"
          width={600}
        />
      </div>

      <div className="flex flex-col md:flex-row md:space-x-16 items-center max-w-6xl mx-auto mb-28">
        <img
          className="w-3/5 object-cover"
          height={400}
          src="/media/image/img-about4.png"
          width={600}
        />
        <div className="w-full md:w-2/5">
          <p className="text-black leading-tight mb-5 uppercase introtext-big">
            ĐỒNG HÀNH LÂU DÀI
          </p>
          <p className="text-black introtext-small">
          Tại Lymor, bạn không chỉ nhận một sản phẩm – bạn nhận được một dịch vụ hậu mãi tận tâm, một đội ngũ luôn sẵn sàng lắng nghe và hỗ trợ, và một không gian mua sắm minh bạch, an toàn.
          </p>
        </div>
      </div>
      </div>
  );
};

export default AboutContent; 