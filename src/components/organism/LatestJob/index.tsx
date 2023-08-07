import { useEffect } from "react";

import { useTypedDispatch, useTypedSelector } from "../../../redux/app/hooks";
import { getLatestJobs } from "../../../redux/latestJobs/action";

import ContentHeader from "../../atoms/ContentHeader";
import LatestJobItem from "./LatestJobItem/index.";

import "./style.css";

export default function LatestJob() {
  const { jobs } = useTypedSelector((state) => state.latestJob);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(getLatestJobs());
  }, []);
  return (
    <div className="job-wrapper">
      <ContentHeader word1="Latest" word2="jobs open" />
      <div className="job-content">
        {items.map((item, i) => (
          <LatestJobItem {...item} key={i} />
        ))}
      </div>
    </div>
  );
}

const items = [
  {
    name: "Social Media Specialists",
    location: "Paris, France",
    jobType: "Agency",
    type: "Full Time",
    categories: ["Marketing", "Design"],
    image: "/images/company-1.png",
  },
  {
    name: "Brand Designer",
    location: "San Fransisco, USA",
    jobType: "Agency",
    type: "Full Time",
    categories: ["Marketing", "Design"],
    image: "/images/company-2.png",
  },
  {
    name: "Interactive Developer",
    location: "San Fransisco, USA",
    jobType: "Agency",
    type: "Full Time",
    categories: ["Marketing", "Design"],
    image: "/images/company-3.png",
  },
  {
    name: "HR Manager",
    location: "San Fransisco, USA",
    jobType: "Agency",
    type: "Full Time",
    categories: ["Marketing", "Design"],
    image: "/images/company-4.png",
  },
];
