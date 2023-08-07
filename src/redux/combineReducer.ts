import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import category from "./category/reducer";
import counter from "./counter/reducer";
import featuredJob from "./featuredJob/reducer";

const persistConfig = {
  key: "root",
  storage,
};

const combineReducer = combineReducers({
  counter,
  category,
  featuredJob,
});

const persistedReducer = persistReducer(persistConfig, combineReducer);

export default persistedReducer;
