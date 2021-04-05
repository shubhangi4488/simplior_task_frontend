import { combineReducers } from "redux";
import addbasicdetailReducer from "./addbasicdetailReducer";
import authReducer from "./authReducer";
import experienceReducer from "./experienceReducer";

export default combineReducers({
  auth: authReducer,
  basicDetail:addbasicdetailReducer,
  experinceDetail:experienceReducer
});
