import React from 'react';

const PolicyConsultation = () => {
  return (
      <div className="mt-44 px-4 pb-12 bg-white">
        {/* Banner Image and Title */}
        <div className="flex flex-col md:flex-row items-center md:items-center gap-8 max-w-6xl mx-auto">
          <img src="/media/image/policy-consul1.svg" alt="Trang sức phong thủy" className="w-full md:w-1/2 shadow-lg object-cover" />
          <div className="md:w-1/2 flex flex-col justify-center">
            <p className="text-xl md:text-2xl mb-4 pl-5">TRANG SỨC PHONG THỦY TẠI LYMOR</p>
            <ul className="list-disc pl-9 space-y-2 text-gray-900 text-[0.825rem]">
              <li>Sự kết hợp giữa giá trị thẩm mỹ và yếu tố phong thủy: Mỗi thiết kế trang sức không đơn giản chỉ để làm đẹp. Thông qua việc kết hợp màu sắc, chất liệu đá quý với hành mệnh, mỗi tác phẩm đều ẩn chứa nguồn năng lượng tích cực giúp hỗ trợ và cân bằng cho chủ nhân.</li>
              <li>Nguồn năng lượng tích cực đồng hành cùng người sở hữu: Trang sức phong thủy được chế tác dựa trên quy luật ngũ hành tương sinh – tương khắc, giúp khơi dậy sức mạnh nội tại, đem lại may mắn, bình an, thu hút tài lộc và thúc đẩy các mối quan hệ hài hòa.</li>
            </ul>
          </div>
        </div>

        {/* Dịch vụ phân tích ngũ hành cá nhân */}
        <div className="rounded-xl mt-16 py-8 px-4 md:px-12 max-w-6xl mx-auto" style={{ backgroundColor: '#f2fdfd' }}>
          <h2 className="text-xl md:text-2xl text-center mb-8">DỊCH VỤ “PHÂN TÍCH NGŨ HÀNH CÁ NHÂN”</h2>
          <div className="relative flex flex-col md:flex-row justify-between gap-10">
            {/* Horizontal line behind circles */}
            <div className="hidden md:block absolute left-[15%] right-[15%] mt-6 h-px z-0" style={{transform: 'translateY(-50%)', backgroundColor: '#80d8d0'}}></div>
            {/* Step 1 */}
            <div className="flex-1 text-center z-10">
              <div className="w-12 h-12 mx-auto mb-6 text-white rounded-full flex items-center justify-center text-xl font-bold" style={{ backgroundColor: '#80d8d0' }}>1</div>
              <h3 className="mb-4 text-sm" style={{ color: '#068877' }}>DỰA TRÊN NGÀY – THÁNG – NĂM SINH</h3>
              <p className="text-gray-600 text-[0.825rem]">Lymor sẽ tổng hợp và phân tích thông tin từ ngày sinh của khách hàng để xác định hành mệnh <br />(Kim, Mộc, Thủy, Hỏa, Thổ).</p>
            </div>
            {/* Step 2 */}
            <div className="flex-1 text-center z-10">
              <div className="w-12 h-12 mx-auto mb-6 text-white rounded-full flex items-center justify-center text-xl font-bold" style={{ backgroundColor: '#80d8d0' }}>2</div>
              <h3 className="mb-4 text-sm" style={{ color: '#068877' }}>XÁC ĐỊNH HÀNH MỆNH VÀ BỘ MÀU ĐÁ QUÝ</h3>
              <p className="text-gray-600 text-[0.825rem]">Dựa trên kết quả phân tích, Lymor đề xuất bộ màu đá quý phù hợp cho bạn. Màu sắc được lựa chọn dựa trên quan niệm phong thủy ngũ hành, vừa tôn lên vẻ đẹp cá nhân, vừa mang lại tác dụng bổ trợ và cân bằng cho bản mệnh.</p>
            </div>
            {/* Step 3 */}
            <div className="flex-1 text-center z-10">
              <div className="w-12 h-12 mx-auto mb-6 text-white rounded-full flex items-center justify-center text-xl font-bold" style={{ backgroundColor: '#80d8d0' }}>3</div>
              <h3 className="mb-4 text-sm" style={{ color: '#068877' }}>MỤC TIÊU HƯỚNG ĐẾN</h3>
              <ul className="text-gray-600 text-[0.825rem] text-left list-disc pl-6">
                <li>Tìm ra màu sắc đá quý phù hợp, mang lại vượng khí và hỗ trợ bản mệnh của từng khách hàng.</li>
                <li>Cân bằng năng lượng, khơi dậy sức mạnh nội tại và thu hút may mắn trong cuộc sống.</li>
                <li>Mang đến những lựa chọn trang sức độc đáo, mang giá trị phong thủy và dấu ấn cá nhân sâu sắc.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tư vấn thiết kế theo yêu cầu */}
        <div className="max-w-6xl mx-auto mt-16 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-xl md:text-2xl mb-4">TƯ VẤN THIẾT KẾ THEO YÊU CẦU</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-900 text-[0.825rem]">
              <li>Kết hợp phong thủy và thẩm mỹ cá nhân:<br /> Bên cạnh yếu tố phong thủy, Lymor còn chú trọng đến sở thích và phong cách cá nhân của mỗi khách hàng. Chúng tôi lắng nghe để đảm bảo sản phẩm không chỉ chuẩn phong thủy mà còn đậm dấu ấn cá nhân.</li>
              <li>Thiết kế riêng, tư vấn và hoàn thiện:<br /> Bạn sẽ được lựa chọn mẫu thiết kế riêng biệt (hình dáng, kiểu dáng, loại đá quý, cách sắp xếp đá...) theo đúng mong muốn. Sau khi thống nhất ý tưởng, Lymor sẽ tiến hành phác thảo, chỉnh sửa và chế tác tạo nên mẫu trang sức hoàn thiện.</li>
            </ul>
          </div>
          <img src="/media/image/policy-consul2.svg" alt="Tư vấn thiết kế theo yêu cầu" className="md:w-1/2 w-full shadow-lg object-cover order-1 md:order-2" />
        </div>

        {/* Footer message */}
        <div className="text-center mt-16 font-bold text-lg" style={{ color: '#80d8d0' }}>
          HÃY ĐỂ LYMOR LẮNG NGHE, TƯ VẤN VÀ CÙNG BẠN TẠO NÊN NHỮNG THIẾT KẾ ĐỘC BẢN<br />
          – NƠI HỘI TỤ GIỮA THẨM MỸ, PHONG THỦY VÀ CÁ TÍNH RIÊNG BIỆT.
          <div className="flex justify-center mt-4">
            <img src="/media/image/policy-consul3.png" alt="Hãy để Lymor lắng nghe, tư vấn và cùng bạn tạo nên những thiết kế độc bản" className="w-12 h-12" />
          </div>
        </div>
      </div>
  );
};

export default PolicyConsultation; 