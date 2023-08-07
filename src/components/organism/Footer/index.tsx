import { Button, Input } from "antd";
import "./style.css";

const images = [
  "/images/Facebook.svg",
  "/images/Instagram.svg",
  "/images/Twitter.svg",
  "/images/Dribbble.svg",
  "/images/LinkedIn.svg",
];

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-content">
        <div className="section-1">
          <img src="/images/logo-white.png" alt="/images/logo-white.png" />
          <div className="description">
            Great platform for the job seeker that <br /> passionate about
            startups. Find your dream job <br /> easier.
          </div>
        </div>
        <div className="section-nav">
          <div className="title">About</div>
          <ul>
            <li>Companies</li>
            <li>Pricing</li>
            <li>Terms</li>
            <li>Advice</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="section-nav">
          <div className="title">Resource</div>
          <ul>
            <li>Help Docs</li>
            <li>Guide</li>
            <li>Updates</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="section-notif">
          <div className="title">Get Job Notifications</div>
          <div className="description">
            The latest job news, articles, sent to <br /> your inbox weekly.
          </div>
          <div className="form">
            <Input placeholder="Email Address" className="input-custom" />
            <Button type="primary">Subscribe</Button>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="footer-copyright">
        <div className="text">2023 @ JobHuntly. All rights reserved.</div>
        <div className="social-media">
          {images.map((item, i) => (
            <img src={item} alt={item} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
