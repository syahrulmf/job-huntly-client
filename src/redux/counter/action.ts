import { AppDispatch } from "..";

export const incrementCounter =
  () =>
  async (dispatch: AppDispatch): Promise<void> => {
    dispatch({
      type: "increment",
    });
  };

export const decrementCounter =
  () =>
  async (dispatch: AppDispatch): Promise<void> => {
    dispatch({
      type: "decrement",
    });
  };
