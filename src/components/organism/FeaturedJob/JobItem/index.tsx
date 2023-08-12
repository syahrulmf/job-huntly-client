import { useNavigate } from "react-router-dom";

type Props = {
  jobType: string;
  name: string;
  type: string;
  location: string;
  description: string;
  categories?: string[] | undefined;
};

export default function JobItem({
  jobType,
  name,
  type,
  location,
  description,
  categories = ["Marketing", "Design"],
}: Props) {
  const navigate = useNavigate();

  return (
    <div className="featured-item" onClick={() => navigate("/job/detail/1")}>
      <div className="logo-tag">
        <img src="/images/company-1.png" alt="/images/company-1.png" />
        <span className="tag">{jobType}</span>
      </div>
      <div className="detail">
        <div className="name">{name}</div>
        <div className="location">
          {type} | {location}
        </div>
        <div className="desc">{description}</div>
      </div>
      <div className="category-flex">
        {categories.map((item, i) => (
          <span className="category" key={i}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
