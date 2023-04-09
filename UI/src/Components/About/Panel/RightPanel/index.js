import React, { useState, useEffect } from "react";
import "./rightPanel.css";
import allActions from "../../../../actions";
import { useSelector, useDispatch } from "react-redux";
import Educational from "./Educational";
import Experiance from "./Experiance";
import Extracurricular from "./Extracurricular";

function RightPanel(props) {
	const [data, setdata] = useState({});

	const dispatch = useDispatch();
	const folderIs = useSelector((state) => state.folderIs || "");
	const folderData = useSelector((state) => state.folderData || {});

	useEffect(() => {
		async function fetchMyAPI() {
			const value = folderIs.value;
			if (value && !folderData[value]) {
				let response = await fetch(`/api/about/details/${value}`);
				response = await response.json();
				if (response.success) {
					setdata(response.data);
					storefolderDataUpdate(value, response.data);
				}
			} else {
				setdata(folderData[value]);
			}
		}
		fetchMyAPI();
	}, [folderIs.value]);

	const storefolderDataUpdate = (key, data) => {
		dispatch(allActions.folderDataAction({ ...folderData, [key]: data }));
	};

	const detailPanel = () => {
		switch (folderIs.category) {
			case 1:
				return <Educational data={data} />;
			case 2:
				return <Experiance data={data} />;
			case 3:
				return <Extracurricular data={data} />;
			case 4:
				return <Educational data={data} />;
			case 5:
				return <Educational data={data} />;

			default:
				break;
		}
	};

	return <div>{detailPanel()}</div>;
}

export default RightPanel;
