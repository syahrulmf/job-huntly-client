import { useEffect } from "react";

import { useTypedDispatch, useTypedSelector } from "../../../redux/app/hooks";
import { getFeaturedJobs } from "../../../redux/featuredJob/action";

import ContentHeader from "../../atoms/ContentHeader";
import JobItem from "./JobItem";

import "./style.css";

export default function FeaturedJob() {
  const { jobs } = useTypedSelector((state) => state.featuredJob);
  const dispatch = useTypedDispatch();

  const jobItemProps = [
    {
      jobType: "Full Time",
      name: "Brand Designer",
      location: "Madrid, Spain",
      type: "Agency",
      description: "Revolut is looking for Email Marketing to help team ma ...",
      categories: ["Marketing", "Design"],
    },
    {
      jobType: "Full Time",
      name: "Social Media Specialist",
      location: "Chicago, USA",
      type: "Agency",
      description: "Revolut is looking for Email Marketing to help team ma ...",
      categories: ["Marketing", "Copywriting"],
    },
    {
      jobType: "Full Time",
      name: "Engineer",
      location: "Las Vegas, USA",
      type: "Agency",
      description: "Revolut is looking for Email Marketing to help team ma ...",
      categories: ["Marketing", "Design"],
    },
    {
      jobType: "Full Time",
      name: "Brand Designer",
      location: "Madrid, Spain",
      type: "Agency",
      description: "Revolut is looking for Email Marketing to help team ma ...",
      categories: ["Marketing", "Design"],
    },
  ];

  useEffect(() => {
    dispatch(getFeaturedJobs());
  }, []);

  return (
    <div className="featured-wrapper">
      <ContentHeader word1="Featured" word2="jobs" />
      <div className="featured-content">
        {jobItemProps.map((item, i) => (
          <JobItem {...item} key={i} />
        ))}
      </div>
    </div>
  );
}
