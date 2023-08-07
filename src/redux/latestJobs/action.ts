import { getLatestJobsService } from "../../services/job";
import { TypedDispatch } from "../app/types";
import * as types from "./constans";

export const getLatestJobs = () => async (dispatch: TypedDispatch) => {
  try {
    dispatch({
      type: types.GET_LATEST_JOBS_LOADING,
      payload: {
        isLoading: true,
      },
    });

    const { data } = await getLatestJobsService();

    dispatch({
      type: types.GET_LATEST_JOBS_SUCCESS,
      payload: {
        data: JSON.stringify(data),
      },
    });
  } catch (error) {
    dispatch({
      type: types.GET_LATEST_JOBS_FAILED,
      payload: {
        error,
      },
    });
  }
};
