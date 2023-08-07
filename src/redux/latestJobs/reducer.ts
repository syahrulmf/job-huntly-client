import * as types from "./constans";

interface LatestJobsState {
  jobs: [];
  isLoading: boolean;
  isError: null | boolean;
}

interface LatestJobsAction {
  type: string;
  payload: {
    data: [];
    isLoading: boolean;
    error: boolean;
  };
}

const initialState: LatestJobsState = {
  jobs: [],
  isLoading: false,
  isError: null,
};

export default function latestJobsReducer(
  state = initialState,
  action: LatestJobsAction
) {
  switch (action.type) {
    case types.GET_LATEST_JOBS_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };

    case types.GET_LATEST_JOBS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        jobs: action.payload.data,
      };

    case types.GET_LATEST_JOBS_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: action.payload.error,
      };

    default:
      return {
        ...state,
      };
  }
}
