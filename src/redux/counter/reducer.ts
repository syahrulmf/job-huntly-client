import { Action } from "@reduxjs/toolkit";

interface CounterState {
  counter: number;
}

const initialState: CounterState = {
  counter: 0,
};

export default function CounterReducer(state = initialState, action: Action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + 1,
      };

    case "decrement":
      return {
        ...state,
        counter: state.counter - 1,
      };

    default:
      return state;
  }
}
