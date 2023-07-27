import { Button, Input } from "antd";
import "./style.css";

export default function FormJob() {
  return (
    <div className="formjob-wrapper">
      <div className="form-job">
        <div className="form-field">
          <img
            style={{ width: "20px" }}
            src="./images/search.svg"
            alt="search icon"
          />
          <Input className="input-custom" placeholder="Search" />
        </div>
        <div className="form-field">
          <img
            style={{ width: "20px" }}
            src="./images/location.svg"
            alt="location icon"
          />
          <Input className="input-custom" placeholder="Location" />
        </div>
        <Button className="button-search" type="primary">
          Search my job
        </Button>
      </div>
      <div className="form-job-description">
        Popular : UI Designer, UX Researcher, Android, Admin
      </div>
    </div>
  );
}
