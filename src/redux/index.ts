import { AnyAction, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import thunk, {
  ThunkAction,
  ThunkDispatch,
  ThunkMiddleware,
} from "redux-thunk";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import persistedReducer from "./combineReducer";

const middleware = [thunk as ThunkMiddleware];

middleware.push(logger);

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

export const persistor = persistStore(store);

// Types
export type AppDispatch = typeof store.dispatch;
export type ReduxState = ReturnType<typeof persistedReducer>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  AnyAction
>;
export const useTypedDispatch = () => useDispatch<TypedDispatch>();
export const useTypedSelector: TypedUseSelectorHook<ReduxState> = useSelector;
