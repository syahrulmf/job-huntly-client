import { signinService } from "../../services/auth";
import { TypedDispatch } from "../app/types";
import * as types from "./constans";

type Data = {
  email: string;
  password: string;
};

export const postSingin = (data: Data) => async (dispatch: TypedDispatch) => {
  try {
    dispatch({
      type: types.POST_SIGNIN_LOADING,
      payload: {
        isLoading: true,
      },
    });

    const res = await signinService(data);

    dispatch({
      type: types.POST_SIGNIN_SUCCESS,
      payload: {
        isLoading: false,
        data: res.data.user,
      },
    });
  } catch (error) {
    dispatch({
      type: types.POST_SIGNIN_FAILED,
      payload: {
        isLoading: false,
        error,
      },
    });
  }
};
