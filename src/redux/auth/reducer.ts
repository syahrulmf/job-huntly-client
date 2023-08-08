import * as types from "./constans";

interface SigninState {
  user: any | null;
  isLoading: boolean;
  isError: null | boolean;
}

interface SigninAction {
  type: string;
  payload: {
    data: [];
    isLoading: boolean;
    error: any;
  };
}

const initialState: SigninState = {
  user: null,
  isLoading: false,
  isError: null,
};

export default function authReducer(
  state = initialState,
  action: SigninAction
) {
  switch (action.type) {
    case types.POST_SIGNIN_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };

    case types.POST_SIGNIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload.data,
      };

    case types.POST_SIGNIN_FAILED:
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
