import React, { useState, useEffect } from "react";
import "./rightPanel.css";
import allActions from "../../../../actions";
import { useSelector, useDispatch } from "react-redux";
import Educational from "./Educational";
import Experiance from "./Experiance";
import Extracurricular from "./Extracurricular";

function RightPanel(props) {
	const [data, setdata] = useState({});
	const [showDetail, setShowDetail] = useState("");

	const dispatch = useDispatch();
	const folderIs = useSelector((state) => state.folderIs || "");
	const folderData = useSelector((state) => state.folderData || {});

	useEffect(() => {
		async function fetchMyAPI() {
			const value = folderIs.value;
			if (value && !folderData[value]) {
				let response = await fetch(`/api/about/details/${value}`);
				response = await response.json();
				setdata(response);
				storefolderDataUpdate(value, response);
			} else {
				setdata(folderData[value]);
			}
		}
		fetchMyAPI();
		showDetails(showDetail);
	}, [folderIs.value]);

	const storefolderDataUpdate = (key, data) => {
		dispatch(allActions.folderDataAction({ ...folderData, [key]: data }));
	};

	const showDetails = (value) => {
		if (value === showDetail) {
			setShowDetail("");
		} else {
			setShowDetail(value);
		}
	};
	const detailPanel = () => {
		switch (folderIs.category) {
			case 1:
				return <Educational data={data} showDetail={showDetail} showDetails={showDetails} />;
			case 2:
				return <Experiance data={data} />;

			case 3:
				return <Extracurricular />;
			case 4:
				return <Educational />;
			case 5:
				return <Educational />;

			default:
				break;
		}
	};

	return (
		<div>
			{detailPanel()}
			<div className="pg-100"></div>
		</div>
	);
}

export default RightPanel;
