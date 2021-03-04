import { createStore, combineReducers } from "redux";
import calReducer from "./calReducer";
import resultReducer from "./resultReducer";

const rootReducer = combineReducers({
  ctr: calReducer,
  res: resultReducer,
});

const store = createStore(rootReducer);

export default store;
