import { BsArrowRight } from "react-icons/bs";

type Props = {
  name: string;
  totalJobs: number;
};

export default function CategoryItem({ name, totalJobs }: Props) {
  return (
    <div className="category-item-wrapper">
      <img src="/images/comp.png" alt="/images/comp.png" />
      <div className="title">{name}</div>
      <div className="info">
        {totalJobs} Jobs available <BsArrowRight className="btn-icon" />
      </div>
    </div>
  );
}
