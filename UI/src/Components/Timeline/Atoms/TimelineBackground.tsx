import React from 'react';

export default function TimelineBackground() {
	return (
		<>
			{/* Background Shapes */}
			<div className="timelineBgOver">
				<div className="bgover1"></div>
				<div className="bgover2"></div>
			</div>

			<div className="timeLineFrame">
				<div className="col-smm-1">
					<div className="shape1"></div>
				</div>
				<div className="col-smm-2 bgWhite">
					<div className="shape2"></div>
				</div>
				<div className="col-smm-6 shape3"></div>
				<div className="col-smm-2 bgWhite">
					<div className="shape4"></div>
				</div>
				<div className="col-smm-1 bgWhite">
					<div className="shape5"></div>
				</div>
			</div>
		</>
	);
}
