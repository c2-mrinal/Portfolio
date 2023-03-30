import React from "react";
import "./rightPanel.css";

function Experiance(props) {
	const { data } = props;
	return (
		<>
			{data && (
				<>
					<div className="experianceTop">
						<span className="mg-10">
							<img src={data.img} alt="" height={80} width={80} />
						</span>
						<span className="mg-10">
							<strong> {data.name}</strong>
						</span>
						<span className="mg-10">
							<a href={data.website} target="_blank">
								<i className="fa-solid fa-arrow-up-right-from-square" title={`${data.name} Website`}></i>
							</a>
						</span>{" "}
						<span className="mg-10">
							<a href={data.linkedin} target="_blank">
								<i className="fa-brands fa-linkedin" title={`${data.name} Linkedin`}></i>
							</a>
						</span>
					</div>
					<div className="row">
						<div className="col-xs-7 col-md-7">
							<div>Overview</div>
							<div>{data.about}</div>
						</div>
						<div className="col-xs-5 col-md-5">
							<div>Role</div>
							{data.designation && (
								<div>
									{data.designation}, {data.department}
								</div>
							)}
							{data.startDate && (
								<div>
									{data.startDate} - {data.endDate}
								</div>
							)}
						</div>
					</div>
				</>
			)}
		</>
	);
}

export default Experiance;
