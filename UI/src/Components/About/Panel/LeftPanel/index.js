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
			response = await response.json();
			if (response.success) {
				setFolderData(response.data.folders);
				folderSelected(response.data.defaultSelected);
				setLoading(false);
			} else {
				console.log(response);
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

	const showNode = (data) => {};
	return (
		<div>
			{FolderData.Mrinal && (
				<Folder explorer={FolderData.Mrinal} selectedFolder={selectedFolder} folderSelected={folderSelected} />
			)}
			{FolderData.Website && (
				<Folder explorer={FolderData.Website} selectedFolder={selectedFolder} folderSelected={folderSelected} />
			)}
			{loading && <Loader />}
		</div>
	);
}

export default LeftPanel;
