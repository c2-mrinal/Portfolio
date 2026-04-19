import React, { useState, useEffect } from "react";
import "./skill.css";
import Loader from "../../Shared/Loader";
import { useWindowSize } from "../../Shared/CustomHooks/useWindowSize";
import { SkillBackground } from "./Atoms/SkillBackground";
import { InstructionModal } from "./Molecules/InstructionModal";
import { BubbleChart } from "./Organisms/BubbleChart";

function Skill({ onMouseOver, onMouseOut }: any) {
	const [windowWidth, windowHeight] = useWindowSize();
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [showAlert, setShowAlert] = useState(false);

	useEffect(() => {
		async function fetchData() {
			try {
				let response = await fetch(`/api/skill/details`);

				if (!response.ok) {
					throw new Error(`Failed to fetch data: ${response.statusText}`);
				}

				let responseData = await response.json();

				if (responseData.success && responseData.data) {
					setData([...responseData.data]);
					setTimeout(() => {
						setShowAlert(true);
					}, 2000);
				} else {
					console.warn(responseData.statusText || responseData.message);
				}
			} catch (error) {
				console.error("An error occurred while fetching data:", error);
			} finally {
				setLoading(false);
			}
		}

		setLoading(true);
		fetchData();
	}, []);

	return (
		<div className="c2-skills w-full h-screen relative">
			<SkillBackground windowWidth={windowWidth} windowHeight={windowHeight} />

			{loading && <Loader />}
			{data.length > 0 ? (
				<BubbleChart 
					data={data} 
					windowWidth={windowWidth} 
					windowHeight={windowHeight}
					onMouseOver={onMouseOver}
					onMouseOut={onMouseOut} 
				/>
			) : (
				!loading && "NO Data Found"
			)}

			{/* <InstructionModal isOpen={showAlert} onClose={() => setShowAlert(false)} /> */}
		</div>
	);
}

export default Skill;
