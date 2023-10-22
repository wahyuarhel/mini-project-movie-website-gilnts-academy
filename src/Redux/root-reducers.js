import { combineReducers } from "redux";
import homePageReducer from "./reducers/HomePage";
import userReducer from "./reducers/UserReducer";

export default combineReducers({
  homePage: homePageReducer,
  users: userReducer,
});
