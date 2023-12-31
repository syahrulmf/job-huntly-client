import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import auth from "./auth/reducer";
import category from "./category/reducer";
import counter from "./counter/reducer";
import featuredJob from "./featuredJob/reducer";
import latestJob from "./latestJobs/reducer";

const persistConfig = {
  key: "root",
  storage,
};

const combineReducer = combineReducers({
  counter,
  category,
  featuredJob,
  latestJob,
  auth,
});

const persistedReducer = persistReducer(persistConfig, combineReducer);

export default persistedReducer;
