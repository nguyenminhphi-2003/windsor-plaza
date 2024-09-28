import appLogo from '../../assets/images/Windsor-Logo-Gold.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="bottom-0">
      <About />
      <Contact />
      <Policy />
    </footer>
  );
}

function About() {
  return (
    <div className="footer-about flex bg-primary-red border-b border-primary-gold pb-9">
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

        <p className='text-base'>
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
    <div className="footer-contact grid grid-cols-3 gap-4 bg-primary-red border-b border-primary-gold py-5">
      <div className="contact-reservation flex flex-col items-center">
        <div className='text-xl font-bold text-primary-gold mb-3'>For Reservations</div>
        <ul>
          <li className='text-xl text-white'>Book Your Stay</li>
          <li className='text-xl text-white'>Check Your Reservations</li>
          <li className='text-xl text-white'>Call Us!</li>
          <li className='text-xl text-white'>reservations@windsorplazahotel.com</li>
        </ul>
      </div>

      <div className="contact-support flex flex-col items-center">
        <div className='text-xl font-bold text-primary-gold mb-3'>Support</div>
        <ul>
          <li className='text-xl text-white'>Contact Us</li>
          <li className='text-xl text-white'>Careers</li>
          <li className='text-xl text-white'>Windsor Club</li>
        </ul>
      </div>

      <div className="contact-connect flex flex-col items-center">
        <div className='text-xl font-bold text-primary-gold mb-3'>Connect</div>
        <ul>
          <li className='text-xl text-white'>Facebook</li>
          <li className='text-xl text-white'>Instagram</li>
        </ul>
      </div>
    </div>
  );
}

function Policy() {
  return (
    <div className="footer-policy flex py-10 items-center justify-center bg-primary-red border-b text-primary-gold">
      <p className='text-xl mx-5'>Terms & Conditions</p>
      <p className='text-xl mx-5'>Privacy</p>
    </div>
  );
}
