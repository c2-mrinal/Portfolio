import { combineReducers } from "redux";
import folderReducer from "./folderReducer";
import folderDataReducer from "./folderDataReducer";
export default combineReducers({
  folderIs: folderReducer,
  folderData: folderDataReducer,
});
