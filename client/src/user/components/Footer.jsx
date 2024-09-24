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
      <Policy />
    </footer>
  );
}

function About() {
  return (
    <div className="footer-about flex bg-primary-red border-b border-primary-gold">
      <div className="about-logo inline-block w-24 h-24 shrink-0 mr-5">
        <img
          className="w-full h-full ml-2.5 mr-2.5 mb-2.5"
          src={appLogo}
          alt="Windsor Logo"
        />
      </div>

      <div className="about-information mx-5 my-4 ml-8 text-primary-gold w-auto shrink-0">
        <div className='font-medium uppercase text-2xl mb-4'>Windsor Plaza Hotel</div>
        <ul>
          <li className='text-lg mb-1'>
            <FontAwesomeIcon icon={faLocationDot} /> 1 Su Van Hanh Street,
            District 5, Ho Chi Minh City, Vietnam
          </li>
          <li className='text-lg mb-1'>
            <FontAwesomeIcon icon={faPhone} /> +84 28 8888 8888
          </li>
          <li className='text-lg mb-1'>
            <FontAwesomeIcon icon={faEnvelope} /> service@windsorplazahotel.com
          </li>
        </ul>
      </div>

      <div className="about-lisence w-auto text-white mx-6 my-6 text-lg font-bold">
        <h2 className='mb-3'>
          CHI NHÁNH CÔNG TY CỔ PHẦN TẬP ĐOÀN ĐẦU TƯ AN ĐÔNG – KHÁCH SẠN THƯƠNG
          MẠI AN ĐÔNG
        </h2>

        <p className='text-lg'>
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
  return (
    <div className="footer-policy flex">
      <p>Terms & Conditions</p>
      <p>Privacy</p>
    </div>
  );
}
