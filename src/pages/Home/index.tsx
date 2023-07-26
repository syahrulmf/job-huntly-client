import { useDispatch, useSelector } from "react-redux";

import { decrementCounter, incrementCounter } from "../../redux/counter/action";

import "./style.css";

export default function Home() {
  const { counter } = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();

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
