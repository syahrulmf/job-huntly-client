import { BsArrowRight } from "react-icons/bs";

import "./style.css";

type Props = {
  word1: string;
  word2: string;
};

export default function ContentHeader({ word1, word2 }: Props) {
  return (
    <div className="header">
      <div className="title">
        {word1} <span>{word2}</span>
      </div>
      <div className="btn-detail">
        Show all jobs <BsArrowRight />
      </div>
    </div>
  );
}
