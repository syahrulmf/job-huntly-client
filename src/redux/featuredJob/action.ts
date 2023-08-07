import { getFeaturedJobService } from "../../services/job";
import { TypedDispatch } from "../app/types";
import * as types from "./constans";

export const getFeaturedJobs = () => async (dispatch: TypedDispatch) => {
  try {
    dispatch({
      type: types.GET_FEATURED_JOB_LOADING,
      payload: {
        isLoading: true,
      },
    });

    const { data } = await getFeaturedJobService();

    dispatch({
      type: types.GET_FEATURED_JOB_SUCCESS,
      payload: {
        data: JSON.stringify(data),
      },
    });
  } catch (error) {
    dispatch({
      type: types.GET_FEATURED_JOB_FAILED,
      payload: {
        error,
      },
    });
  }
};
