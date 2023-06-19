import React, { useState, useEffect, useRef } from "react";
import "./rightPanel.css";
import allActions from "../../../../actions";
import { useSelector, useDispatch } from "react-redux";
import Educational from "./Educational";
import Experiance from "./Experiance";
import Extracurricular from "./Extracurricular";
import Loader from "../../../../Shared/Loader";
import UnderProgress from "../../../../Shared/UnderProgress";
import Workflow from "./Workflow";
import Library from "./Library";

function RightPanel(props) {
	const [data, setdata] = useState({});
	const [loading, setLoading] = useState(false);
	const scrollToRef = useRef(null);

	const dispatch = useDispatch();
	const folderIs = useSelector((state) => state.folderIs || "");
	const folderData = useSelector((state) => state.folderData || {});

	useEffect(() => {
		async function fetchMyAPI() {
			const value = folderIs.value;
			if (value && !folderData[value]) {
				setLoading(true);
				let response = await fetch(`/api/about/details/${value}`);

				if (response?.ok) {
					response = await response.json();
				}
				if (response.success) {
					setdata(response.data);
					storefolderDataUpdate(value, response.data);
					setLoading(false);
				} else {
					setLoading(false);
				}
			} else {
				setdata(folderData[value]);
			}
		}
		fetchMyAPI();
		scrollToRef.current.scrollIntoView();
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
				return <Workflow data={data} />;
			case 5:
				return <Library data={data} />;
			// case 6:
			// 	return <UnderProgress />;
			// case 7:
			// 	return <UnderProgress />;
			// case 8:
			// 	return <UnderProgress />;

			default:
				return <UnderProgress />;
		}
	};

	return (
		<>
			<div ref={scrollToRef}></div>
			<div>{detailPanel()}</div>
			{loading && <Loader />}
		</>
	);
}

export default RightPanel;
