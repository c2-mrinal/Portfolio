"use client";

import React, { useEffect, useState } from "react";
import Loader from "../../Shared/Loader";
import "./timeline.css";
import TimelineBackground from "./Atoms/TimelineBackground";
import TimelineFrame from "./Atoms/TimelineFrame";
import TimelineScroller from "./Organisms/TimelineScroller";

export default function Scene() {
	const [Data, setData] = useState<any[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function fetchMyAPI() {
			try {
				setLoading(true);
				const response = await fetch(`/api/career`);

				if (!response.ok) {
					throw new Error(`Failed to fetch data: ${response.statusText}`);
				}

				const responseData = await response.json();

				if (responseData.success) {
					setData([...responseData.data]);
				} else {
					throw new Error(responseData.message || "API response unsuccessful");
				}
			} catch (error) {
				console.error("An error occurred while fetching data:", error);
			} finally {
				setLoading(false);
			}
		}

		fetchMyAPI();
	}, []);

	return (
		<>
			{!loading && Data && Data.length > 0 && (
				<TimelineScroller data={Data} />
			)}
			
			<TimelineFrame />
			<TimelineBackground />

			{loading && <Loader />}
		</>
	);
}
