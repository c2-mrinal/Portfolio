import React from "react";
import "./rightPanel.css";

function Experiance(props) {
	const { data } = props;
	return (
		<>
			{data && (
				<div className="experianceContainer">
					<div className="experianceTop ">
						<div className=" row">
							<div className="col-xs-3 col-md-3 ">
								<span className="mg-10">
									<a href={data.website}>
										<img className="educationImage" src={data?.img} height="150" width="150" alt="" />
									</a>
								</span>
							</div>
							<div className="col-xs-7 col-md-7 comapnyNameContainer">
								<span className="mg-10 companyLink">
									<strong className="companyName"> {data.name}</strong>
								</span>
								<span className="mg-10">
									<a href={data.linkedin} target="_blank">
										<i className="fa-brands fa-linkedin companyLinkedin" title={`${data.name} Linkedin`}></i>
									</a>
								</span>
							</div>
						</div>
					</div>
					<div className="row experianceDetailContainer">
						<div className="col-xs-7 col-md-7 ">
							<h2>
								<strong>Overview</strong>
							</h2>
							<div className="overviewSide">{data.about}</div>
						</div>
						<div className="col-xs-5 col-md-5 ">
							<h2>
								<strong>Role</strong>
							</h2>
							<div className="roleSide">
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
					</div>
					<div className="row skillSection">
						<h2>
							<strong>Skills</strong>
						</h2>{" "}
						<div className="list-inline-item">
							{data?.skills &&
								Object.entries(data.skills)?.map((val, ind) => {
									return (
										<span className="mg-10 list-inline-item" key={ind}>
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
						<h2>
							<strong>Notable Works</strong>
						</h2>
						<div className="">
							<ul>
								{data.notableWork?.map((val, ind) => {
									return <li key={ind}>{val}</li>;
								})}
							</ul>
						</div>
					</div>
					<div className="row skillSection">
						<h2>
							<strong>Activities</strong>
						</h2>
						<div className="">
							<ul className="activityUL">
								{data.activity?.map((val, ind) => {
									return (
										<li className="activityLI" key={ind}>
											<img src={val.img} width="300" height="300" />
											<p className="activityText">{val.name}</p>
										</li>
									);
								})}
							</ul>
							<div class="light"></div>
						</div>
						<div className="pg-20"></div>
					</div>
				</div>
			)}
		</>
	);
}

export default Experiance;
