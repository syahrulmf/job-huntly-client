import { Button } from "antd";
import "./styles.css";

export default function BannerSignUp() {
  return (
    <div className="banner-wrapper">
      <div className="banner-flex">
        <div className="section-cta">
          <div className="title">
            Start posting <br /> jobs today
          </div>
          <div className="subtitle">Start posting jobs for only $10.</div>
          <Button type="primary" className="btn-signup">
            Sig Up For Free
          </Button>
        </div>
        <div className="section-img">
          <img
            src="/images/dashboard.png"
            alt="/images/dashboard.png"
            className="img-dashboard"
          />
        </div>
      </div>
    </div>
  );
}
