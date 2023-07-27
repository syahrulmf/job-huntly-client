import { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";

import { useTypedDispatch, useTypedSelector } from "../../../redux/app/hooks";
import { getCategories } from "../../../redux/category/action";

import CategoryItem from "./CategoryItem";

import "./style.css";

const categories = [
  {
    name: "Design",
    totalJobs: 235,
  },
  {
    name: "Sales",
    totalJobs: 235,
  },
  {
    name: "Marketing",
    totalJobs: 235,
  },
  {
    name: "Finance",
    totalJobs: 235,
  },
];

export default function Category() {
  const category = useTypedSelector((state) => state.category);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div className="category-wrapper">
      <div className="category-header">
        <div className="title">
          Explore by <span>category</span>
        </div>
        <div className="btn-detail">
          Show all jobs <BsArrowRight />
        </div>
      </div>
      <div className="category-content">
        {categories.map((item, i) => (
          <CategoryItem name={item.name} totalJobs={item.totalJobs} key={i} />
        ))}
      </div>
    </div>
  );
}
