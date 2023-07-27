import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

import { store } from "..";
import persistedReducer from "../combineReducer";

export type AppDispatch = typeof store.dispatch;
export type ReduxState = ReturnType<typeof persistedReducer>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  AnyAction
>;
