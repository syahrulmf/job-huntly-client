import { TypedDispatch } from "..";

export const incrementCounter = () => async (dispatch: TypedDispatch) => {
  dispatch({
    type: "increment",
  });
};

export const decrementCounter = () => async (dispatch: TypedDispatch) => {
  dispatch({
    type: "decrement",
  });
};
