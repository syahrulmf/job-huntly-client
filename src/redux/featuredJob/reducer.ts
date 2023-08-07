import * as types from "./constans";

interface FeaturedJobState {
  jobs: [];
  isLoading: boolean;
  isError: null | boolean;
}

interface FeaturedJobAction {
  type: string;
  payload: {
    data: [];
    isLoading: boolean;
    error: boolean;
  };
}

const initialState: FeaturedJobState = {
  jobs: [],
  isLoading: false,
  isError: null,
};

export default function featuredJobReducer(
  state = initialState,
  action: FeaturedJobAction
) {
  switch (action.type) {
    case types.GET_FEATURED_JOB_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };

    case types.GET_FEATURED_JOB_SUCCESS:
      return {
        ...state,
        isLoading: false,
        jobs: action.payload.data,
      };

    case types.GET_FEATURED_JOB_FAILED:
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
