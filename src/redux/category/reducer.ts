import * as types from "./constans";

interface CategoryState {
  categories: [];
  isLoading: boolean;
  isError: null | boolean;
}

interface CategoryAction {
  type: string;
  payload: {
    data: [];
    isLoading: boolean;
    error: boolean;
  };
}

const initialState: CategoryState = {
  categories: [],
  isLoading: false,
  isError: null,
};

export default function categoryReducer(
  state = initialState,
  action: CategoryAction
) {
  switch (action.type) {
    case types.GET_CATEGORY_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };

    case types.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories: action.payload.data,
      };

    case types.GET_CATEGORY_FAILED:
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
