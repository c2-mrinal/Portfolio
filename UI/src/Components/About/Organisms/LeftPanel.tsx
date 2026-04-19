"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import allActions from "../../../actions";
import { useSelector, useDispatch } from "react-redux";

import FolderItem from "../Molecules/FolderItem";
import "./leftPanel.css";
import Loader from "../../../Shared/Loader";

interface LeftPanelProps {
	selectFolder: (data: any) => void;
	display: boolean;
}

function LeftPanel(props: LeftPanelProps) {
	const pathname = usePathname();
	const path = pathname ? pathname.split("/") : [];

	const [FolderData, setFolderData] = useState<any>({});
	const [loading, setLoading] = useState(false);

	const selectedFolder = useSelector((state: any) => {
		return state.folderIs;
	});

	const dispatch = useDispatch();

	useEffect(() => {
		const fetchMyAPI = async () => {
			setLoading(true);
			try {
				let url = `/api/about/folders`;
				if (path[2]) {
					url += "/" + path[2];
				}
				const response: any = await fetch(url);
				if (response.ok) {
					const responseData = await response.json();
					if (responseData.success && responseData.data) {
						setFolderData(responseData.data.folders);
						folderSelected(responseData.data.defaultSelected);
					} else {
						console.error(responseData.statusText || responseData.message);
					}
				} else {
					console.error("Network error");
				}
			} catch (error) {
				console.error("An error occurred:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchMyAPI();
	}, []);

	const folderSelected = (data: any) => {
		if (data.value !== selectedFolder?.value) {
			props.selectFolder(data);
			dispatch(allActions.folderAction(data));
		}
	};

	return (
		<div className={`${props.display ? "folderListDiplay" : "folderListHide"}`}>
			{FolderData.Mrinal && (
				<FolderItem explorer={FolderData.Mrinal} selectedFolder={selectedFolder} folderSelected={folderSelected} />
			)}
			{FolderData.Website && (
				<FolderItem explorer={FolderData.Website} selectedFolder={selectedFolder} folderSelected={folderSelected} />
			)}
			<div className="splitBottomspacing"></div>

			{loading && <Loader />}
		</div>
	);
}

export default LeftPanel;
