import { combineReducers } from "redux";
import folderReducer from "./folderReducer";
import folderDataReducer from "./folderDataReducer";
import deviceType from "./deviceTypeReducer";

export default combineReducers({
	folderIs: folderReducer,
	folderData: folderDataReducer,
	deviceTypeTouch: deviceType,
});
