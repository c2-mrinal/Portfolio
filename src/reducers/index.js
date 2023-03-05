import { combineReducers } from "redux";
import folderReducer from "./folderReducer";
export default combineReducers({
  folderIs: folderReducer,
});
