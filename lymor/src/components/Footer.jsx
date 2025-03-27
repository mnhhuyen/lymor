import React from 'react';
import './Footer.css';
import './Navbar.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-content grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="contact-info">
                    <div className="flex phone">
                        <img className="icon" src="/media/image/phone-icon.svg" alt="Phone Icon" />
                        <div>
                            <p>GỌI TƯ VẤN (9:00 - 19:00)</p>
                            <p className="bold-info">028 1234 5678</p>
                            <p>Tất cả các ngày trong tuần</p>
                        </div>
                    </div>
                    <div className="email">
                        <img className="icon" src="/media/image/email-icon.svg" alt="Email Icon" />
                        <div>
                            <p>GÓP Ý, KHIẾU NẠI</p>
                            <p className="bold-info">Email: cskh@lymor.vn</p>
                            <p>Tất cả các ngày trong tuần</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h4>Cửa hàng</h4>
                    <img className="footer-image" src="/media/image/banner-footer.svg" alt="Banner Footer" />
                </div>
                <div>
                    <h4>Độc Quyền Từ LYMOR</h4>
                    <p className="text-sm">Cùng LYMOR đón chờ những thiết kế mới, sự kiện đặc biệt và những trải nghiệm đầy cảm hứng!</p>
                    <div className="email-signup">
                        <input type="email" placeholder="Email" />
                        <button>Đăng ký</button>
                    </div>
                    <div className="flex social-icons mt-2">
                        <a href="#" className="nav-link"><img src="/media/image/fb-vector.svg"></img></a>
                        <a href="#" className="nav-link"><img src="/media/image/ins-vector.svg"></img></a>
                        <a href="#" className="nav-link"><img src="/media/image/zalo-vector.svg"></img></a>
                        <a href="#" className="nav-link"><img src="/media/image/email-vector.svg"></img></a>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <p className="text-sm">Change Location: United States <i className="fas fa-caret-down"></i></p>
            </div>
        </div>
    );
}

export default Footer;