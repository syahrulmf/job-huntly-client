import { useTypedDispatch, useTypedSelector } from "../../redux";
import { decrementCounter, incrementCounter } from "../../redux/counter/action";

import "./style.css";

export default function Home() {
  const { counter } = useTypedSelector((state) => state.counter);
  const dispatch = useTypedDispatch();

  console.log(counter);

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
