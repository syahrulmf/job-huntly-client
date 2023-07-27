import { getCategoryService } from "../../services/category";
import { TypedDispatch } from "../app/types";
import * as types from "./constans";

export const getCategories = () => async (dispatch: TypedDispatch) => {
  try {
    dispatch({
      type: types.GET_CATEGORY_LOADING,
      payload: {
        isLoading: true,
      },
    });

    const data = await getCategoryService();

    dispatch({
      type: types.GET_CATEGORY_SUCCESS,
      payload: {
        data: eval(data.data),
      },
    });
  } catch (error) {
    dispatch({
      type: types.GET_CATEGORY_FAILED,
      payload: {
        error,
      },
    });
  }
};
