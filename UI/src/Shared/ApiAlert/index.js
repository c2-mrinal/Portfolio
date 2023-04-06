import React, { useState, useEffect } from "react";
import "./apiBanner.css";
export function APIBanner(props) {
	const [showAlert, setShowAlert] = useState(false);

	useEffect(() => {
		setShowAlert(
			true,
			setTimeout(() => {
				setShowAlert(false);
			}, 3000)
		);
	}, [props.text]);

	return (
		<>
			{showAlert ? (
				<div className="apiBannerAlert" onClick={() => setShowAlert(false)}>
					<div className={`alert alert-${props.status}`} role="alert">
						{"props.text"}
					</div>
				</div>
			) : (
				""
			)}
		</>
	);
}

export const apiBanner = (status, text) => {
	console.log(status, text);
	return (
		<div>
			"<APIBanner status={status} text={text} />"
		</div>
	);
};
