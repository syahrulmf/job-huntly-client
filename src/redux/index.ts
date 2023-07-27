import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import thunk, { ThunkMiddleware } from "redux-thunk";

import persistedReducer from "./combineReducer";

const middleware = [thunk as ThunkMiddleware];

middleware.push(logger);

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

export const persistor = persistStore(store);
