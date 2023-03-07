import { combineReducers } from "redux";
import cardReducer from "./reducers";
const rootReducer = combineReducers({
  data: cardReducer,
});
export default rootReducer;
