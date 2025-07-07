import React from 'react';

function Introduction() {
  return (
    <div className="max-w-7xl mx-auto py-12">
      <div className="flex flex-col md:flex-row md:space-x-16 items-center">
        <img
          className="w-full md:w-1/2 object-cover"
          height={400}
          src="/media/image/img-collection1.svg"
          width={600}
        />
        <div className="w-full md:w-1/2">
          <p className="text-black leading-tight mb-5 uppercase introtext-big">
            DỊU DÀNG &amp; KIÊU HÃNH
          </p>
          <p className="text-black introtext-small">
          Bộ sưu tập nhẫn đá quý từ Lymor là sự kết tinh giữa vẻ đẹp sang trọng, tinh tế và nét cuốn hút đầy cá tính. Mỗi thiết kế trong bộ sưu tập ‘Duyên dáng’ không chỉ tôn vinh khí chất riêng biệt của người phụ nữ, mà còn là món quà trao gửi sự tự tin – để bạn luôn nổi bật và rạng ngời ở mọi khoảnh khắc. Với Lymor, trang sức không chỉ là phụ kiện, mà là lời khẳng định vẻ đẹp và bản lĩnh của chính bạn.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-16 items-center mt-20">
        <div className="w-full md:w-1/2">
          <p className="text-black leading-tight mb-5 uppercase introtext-big">
            TỎA SÁNG &amp; TINH TẾ
          </p>
          <p className="text-black introtext-small">
          ‘Duyên dáng’ không chỉ là tên gọi, mà là cảm xúc mà mỗi thiết kế của Lymor mang lại – một chút kiêu hãnh, một chút dịu dàng, và thật nhiều rung cảm tinh tế. Khi bạn chọn cho mình một món trang sức, ấy là khi bạn kể một câu chuyện về chính mình. Và hành trình đó… vẫn còn đang tiếp tục.
          </p>
        </div>
        <img
          className="w-full md:w-1/2 object-cover"
          height={400}
          src="/media/image/img-collection2.svg"
          width={600}
        />
      </div>
    </div>
  );
}

export default Introduction;
