import { useEffect } from "react";
import { useTypedDispatch, useTypedSelector } from "../../redux/app/hooks";
import { decrementCounter, incrementCounter } from "../../redux/counter/action";

import { getCategories } from "../../redux/category/action";
import "./style.css";

export default function Home() {
  const { counter } = useTypedSelector((state) => state.counter);
  const category = useTypedSelector((state) => state.category);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(getCategories());
    console.log(category.categories);
  }, []);

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };

  const handleDecrement = () => {
    dispatch(decrementCounter());
  };

  return (
    <div>
      <h1>Home Page</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={handleIncrement}>Add</button>{" "}
      <button onClick={handleDecrement}>Min</button>
    </div>
  );
}
