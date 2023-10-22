import "../Assets/Styles/FooterStyle.css";
import imgLogo from "../Assets/Images/brand-logo.png";
import imgGplay from "../Assets/Images/googleplay .png";
import imgApp from "../Assets/Images/appstore.png";
import imgFb from "../Assets/Images/face.png";
import imgPin from "../Assets/Images/pinter.png";
import imgIg from "../Assets/Images/instagram.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={imgLogo} alt="brand logo" /><p>BBM Warehouse</p>
          <p>
          Unlimited movies and more.
          Watch anywhere. Cancel anytime.
          </p>
        </div>
        <ul className="footer-nav">
          <li>Tentang kami</li>
          <li>Blog</li>
          <li>Layanan</li>
          <li>Karir</li>
          <li>Pusat Media</li>
        </ul>
        <div className="social">
          <p>Download</p>
          <div className="social-download">
            <img href='https://play.google.com/store' src={imgGplay} alt="google play" />
            <img href='https://www.apple.com/app-store/' className="appStore" src={imgApp} alt="app store" />
          </div>
          <p>Social Media</p>
          <div className="social-media">
            <img href='https://id-id.facebook.com/' src={imgFb} alt="facebook" />
            <img href='https://id.pinterest.com/login/' src={imgPin} alt="pinterest" />
            <img href='https://www.instagram.com/' src={imgIg} alt="instagram" />
          </div>
        </div>
      </div>
      <div className="copyright">
        <u>Copyright &copy; 2000-202 MilanTV. All Right Reserved</u>
      </div>
    </div>
  );
}
