import React, { useState, useEffect } from "react";
import allActions from "../../../../actions";
import { useSelector, useDispatch } from "react-redux";

import Folder from "./Folder";
import "./leftPanel.css";
import Loader from "../../../../Shared/Loader";

function LeftPanel(props) {
	const [FolderData, setFolderData] = useState({});
	const [loading, setLoading] = useState(false);

	const selectedFolder = useSelector((state) => state.folderIs);

	const dispatch = useDispatch();

	useEffect(() => {
		async function fetchMyAPI() {
			setLoading(true);
			let response = await fetch(`/api/about/folders`);
			if (response?.ok) {
				response = await response.json();
			}
			if (response.success && response.data) {
				setFolderData(response.data.folders);
				folderSelected(response.data.defaultSelected);
				setLoading(false);
			} else {
				console.log(response.statusText || response.message);
				setLoading(false);
			}
		}
		return () => fetchMyAPI();
	}, []);

	const folderSelected = (data) => {
		if (data.value !== selectedFolder.value) {
			props.selectFolder(data);
			dispatch(allActions.folderAction(data));
		}
	};

	return (
		<div className={`${props.display ? "folderListDiplay" : "folderListHide"}`}>
			{FolderData.Mrinal && (
				<Folder explorer={FolderData.Mrinal} selectedFolder={selectedFolder} folderSelected={folderSelected} />
			)}
			{FolderData.Website && (
				<Folder explorer={FolderData.Website} selectedFolder={selectedFolder} folderSelected={folderSelected} />
			)}
			<div className="splitBottomspacing"></div>

			{loading && <Loader />}
		</div>
	);
}

export default LeftPanel;
