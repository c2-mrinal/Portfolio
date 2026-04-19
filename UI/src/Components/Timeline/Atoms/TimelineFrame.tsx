import React from 'react';
import TimeLineSvg from "../../../Shared/SVG/TimeLineSvg";

export default function TimelineFrame() {
	return (
		<div className="timeLineFrame headerTextContainer">
			<div className="col-smm-1 contain1">
				<div className="careerHeaderText chtStart">
					<h3>CAREER</h3>
				</div>
				<TimeLineSvg className="wapper1" />
			</div>
			<div className="col-smm-2 contain2">
				<TimeLineSvg className="wapper2" />
			</div>
			<div className="col-smm-6 contain3"></div>
			<div className="col-smm-2 contain4">
				<TimeLineSvg className="wapper3" />
			</div>
			<div className="col-smm-1 contain5">
				<div className="careerHeaderText chtEnd">
					<h3>TIMELINE</h3>
				</div>
				<TimeLineSvg className="wapper4" />
			</div>
		</div>
	);
}
