import { useNavigate } from "react-router-dom";

type Props = {
  name: string;
  location: string;
  jobType: string;
  type: string;
  categories?: string[] | undefined;
  image: string;
};

export default function LatestJobItem({
  name,
  location,
  jobType,
  type,
  categories,
  image,
}: Props) {
  const navigate = useNavigate();
  return (
    <div className="latest-job-item" onClick={() => navigate("/job/detail/1")}>
      <div className="logo">
        <img src={image} alt={image} />
      </div>
      <div className="display">
        <div className="name">{name}</div>
        <div className="location">
          {jobType} . {location}
        </div>
        <div className="tag">
          <div className="type">
            <span>{type}</span>
          </div>
          {categories?.map((item, i) => (
            <span className="category" key={i}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
