import appLogo from '../../assets/images/Windsor-Logo-Gold.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="absolute bottom-0">
      <About />
      <Contact />
      <div>Policy</div>
    </footer>
  );
}

function About() {
  return (
    <div className="footer-about flex">
      <div className="about-logo inline-block w-24 h-24">
        <img
          className="w-full h-full ml-2.5 mr-2.5 mb-2.5"
          src={appLogo}
          alt="Windsor Logo"
        />
      </div>

      <div className="about-information">
        <h2>Windsor Plaza Hotel</h2>
        <ul>
          <li>
            <FontAwesomeIcon icon={faLocationDot} /> 1 Su Van Hanh Street,
            District 5, Ho Chi Minh City, Vietnam
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} /> +84 28 8888 8888
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} /> service@windsorplazahotel.com
          </li>
        </ul>
      </div>

      <div className="about-lisence">
        <h2>
          CHI NHÁNH CÔNG TY CỔ PHẦN TẬP ĐOÀN ĐẦU TƯ AN ĐÔNG – KHÁCH SẠN THƯƠNG
          MẠI AN ĐÔNG
        </h2>

        <p>
          Giấy CNĐKDN: 0304938912-001 – Ngày cấp: 30/06/2008 (Sửa đổi lần thứ 4,
          ngày 05/10/2017) Cơ quan cấp: Phòng Đăng ký kinh doanh – Sở kế hoạch
          và Đầu tư TP.HCM Địa chỉ đăng ký kinh doanh: 18 An Dương Vương, Phường
          09, Quận 5, Tp. Hồ Chí Minh, Việt Nam
        </p>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="footer-contact flex">
      <div className="contact-reservation">
        <h2>For Reservations</h2>
        <ul>
          <li>Book Your Stay</li>
          <li>Check Your Reservations</li>
          <li>Call Us!</li>
          <li>reservations@windsorplazahotel.com</li>
        </ul>
      </div>

      <div className="contact-support">
        <h2>Support</h2>
        <ul>
          <li>Contact Us</li>
          <li>Careers</li>
          <li>Windsor Club</li>
        </ul>
      </div>

      <div className="contact-connect">
        <h2>Connect</h2>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
        </ul>
      </div>
    </div>
  );
}

function Policy() {
  return <div className="footer-policy"></div>;
}
