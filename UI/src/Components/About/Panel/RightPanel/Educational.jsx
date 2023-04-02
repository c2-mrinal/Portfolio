import React from "react";
import "./rightPanel.css";

export default function Educational(props) {
	const { data } = props;
	return (
		<div>
			<div className="card">
				<div className="card-header row">
					<div className="col-xs-3 col-md-3">
						<img src={data?.img} height="150" width="150" alt="" />
					</div>
					<div className="col-xs-9 col-md-9">
						{data &&
							data.info?.map((info) => {
								return (
									<span className="infoTextBox" onClick={() => props.showDetails(info[1])} key={info[1]}>
										<strong>{info[0]} </strong>
									</span>
								);
							})}
						{props.showDetail ? <div className="detailsStyled"> {props.showDetail}</div> : ""}
					</div>
				</div>
				<div className="card-body rightPanel">
					<div>
						<h5 className="card-title">About</h5>
						<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
					</div>
					<div>
						<div>
							{data?.projects ? (
								<>
									<h1> Projects</h1>
									{data.projects.map((data) => {
										console.log(data);
										return (
											<>
												<h2>
													<strong>{data.name}</strong>
												</h2>
												<div>
													<h3> Descriptions</h3>
													{data.description}
												</div>
												<div>
													<span>
														<strong>Stacked Used: </strong>
													</span>
													<span>
														{Object.entries(data.skills).map((val) => {
															return (
																<span className="mg-10">
																	<i className={val[1]}></i> {val[0]}
																</span>
															);
														})}
													</span>
												</div>
												<br />
											</>
										);
									})}
								</>
							) : (
								""
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
