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
		const fetchMyAPI = async () => {
			setLoading(true);
			try {
				const response = await fetch(`/api/about/folders`);
				if (response.ok) {
					const responseData = await response.json();
					if (responseData.success && responseData.data) {
						setFolderData(responseData.data.folders);
						folderSelected(responseData.data.defaultSelected);
					} else {
						console.log(responseData.statusText || responseData.message);
					}
				} else {
					console.log("Network error");
				}
			} catch (error) {
				console.error("An error occurred:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchMyAPI();
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
