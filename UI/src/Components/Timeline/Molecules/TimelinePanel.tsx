import React, { forwardRef } from 'react';

interface TimelinePanelProps {
	val: any;
	ind: number;
	currentScrollIndex: number;
}

const TimelinePanel = forwardRef<HTMLDivElement, TimelinePanelProps>(
	({ val, ind, currentScrollIndex }, ref) => {
		return (
			<div className="panel" key={val?.age + ind}>
				<div className="textContainer">
					<div className="col-smm-1 t1"></div>

					<div className="col-smm-2 t2" ref={ref}>
						<div className="textRotated subClass">{val.age}</div>
					</div>

					<div className="col-smm-6 t3">
						<h2 className={`textHeader ${currentScrollIndex === ind ? "showpanelHeader" : "hidepanelHeader"}`}>
							{val.header}{" "}
							<a href={`/about/${val.value}`} target="_blank" rel="noreferrer">
								<i className="fa fa-external-link" aria-hidden="true"></i>
							</a>
						</h2>
						<div className="textAbout">
							<em>{val.about}</em>
						</div>
						<div className="textDetail">{val.detail}</div>
					</div>

					<div className="col-smm-2 t4">{val.year}</div>
					<div className="col-smm-1 t5"></div>
				</div>
			</div>
		);
	}
);

TimelinePanel.displayName = 'TimelinePanel';

export default TimelinePanel;
