import {
  legacy_createStore as createStore,
  applyMiddleware,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";
import logger from "redux-logger";

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = legacy_createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
