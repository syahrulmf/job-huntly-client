import { useEffect } from "react";
import { useTypedDispatch, useTypedSelector } from "../../../redux/app/hooks";
import ContentHeader from "../../atoms/ContentHeader";
import JobItem from "./JobItem";

import { getFeaturedJobs } from "../../../redux/featuredJob/action";
import "./style.css";

export default function FeaturedJob() {
  const { jobs } = useTypedSelector((state) => state.featuredJob);
  const dispatch = useTypedDispatch();

  console.log(jobs);

  const jobItemProps = {
    jobType: "Full Time",
    name: "Brand Designer",
    location: "Madrid, Spain",
    type: "Agency",
    description: "Revolut is looking for Email Marketing to help team ma ...",
    categories: ["Marketing", "Design"],
  };

  useEffect(() => {
    dispatch(getFeaturedJobs());
  }, []);

  return (
    <div className="featured-wrapper">
      <ContentHeader word1="Featured" word2="jobs" />
      <div className="featured-content">
        {[0, 1, 3, 4].map((item, i) => (
          <JobItem
            jobType="Full Time"
            name="Brand Designer"
            location="Madrid, Spain"
            type="Agency"
            description="Revolut is looking for Email Marketing to help team ma ..."
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
