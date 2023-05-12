import React from "react";
import "./underProgress.css";

function UnderProgress() {
	return (
		<div className="upContainer">
			<div className="iconSection">
				<div className="iconHammer">
					<i className="fa fa-duotone fa-hammer fa-bounce iconSpan" title="Fixing"></i>
				</div>
				<div className="iconNail">
					<i
						className="fa fa-duotone fa-bug fa-fade"
						style={{ "--fa-primary-color": "#000000", "--fa-secondary-color": "#e5e0c7" }}
					></i>
					{/* <i class="fa fa-duotone fa-bug " title="Bug"></i> */}
					{/* <i className="fa fa-duotone fa-map-pin" ></i> */}
				</div>
			</div>
			<div className="textSection">Under Construction</div>
		</div>
	);
}

export default UnderProgress;
