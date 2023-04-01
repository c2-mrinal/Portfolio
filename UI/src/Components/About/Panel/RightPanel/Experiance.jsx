import React from "react";
import "./rightPanel.css";

function Experiance(props) {
	const { data } = props;
	return (
		<>
			{data && (
				<>
					<div className="experianceTop d-flex">
						<span className="mg-10">
							<img src={data.img} alt="" height={50} width={80} />
						</span>
						<span className="mg-10">
							<strong className="companyName"> {data.name}</strong>
						</span>
						<span className="externalLink">
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
						<div className="col-xs-7 col-md-7 overviewSide">
							<h3>Overview</h3>
							<div>{data.about}</div>
						</div>
						<div className="col-xs-5 col-md-5 roleSide">
							<h3>Role</h3>
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
					<div className="row skillSection">
						<h3> Skills</h3>
						<div className="list-inline-item">
							{Object.entries(data?.skills)?.map((val) => {
								return (
									<span className="mg-10 list-inline-item">
										<span>
											<i className={val[1] + " mgr-5"} />
										</span>
										<span>{val[0]}</span>
									</span>
								);
							})}
						</div>
					</div>
					<div className="row skillSection">
						<h3> Notable Works</h3>
						<div className="">
							<ul>
								{data?.notableWork.map((val) => {
									return <li>{val}</li>;
								})}
							</ul>
						</div>
					</div>
					<div className="row skillSection">
						<h3> Activities</h3>
						<div className="">
							<ul className="activityUL">
								{data.activity?.map((val) => {
									console.log(val);
									return (
										<li className="activityLI">
											<img src={val.img} width="300" />
											<p>{val.name}</p>
										</li>
									);
								})}
							</ul>
							<div class="light"></div>
						</div>
					</div>
				</>
			)}
		</>
	);
}

export default Experiance;
