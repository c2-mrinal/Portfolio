import React, { useState, useEffect } from "react";
import "./rightPanel.css";

export default function Educational(props) {
	const { data } = props;
	const [showDetail, setShowDetail] = useState("");
	const showDetails = (value, ind = 0) => {
		setSelectedIndex(ind);
		if (value === showDetail) {
			setShowDetail("");
		} else {
			setShowDetail(value);
		}
	};

	useEffect(() => {
		showDetails(showDetail);
	}, [props.data]);

	const [selectedIndex, setSelectedIndex] = useState(0);
	return (
		<div>
			<div className="">
				<div className="educationHeader row">
					<div className="col-xs-3 col-md-3">
						<img src={data?.img} height="150" width="150" alt="" />
					</div>
					<div className="col-xs-9 col-md-9">
						{data &&
							data.info?.map((info, ind) => {
								!showDetail && ind === 0 && showDetails(info[1], ind);
								return (
									<span
										className={`infoTextBox ${selectedIndex === ind ? "infoTextBoxSelected" : ""}`}
										onClick={() => showDetails(info[1], ind)}
										key={info[1]}
									>
										<strong>{info[0]} </strong>
									</span>
								);
							})}
						{showDetail ? <div className="detailsStyled"> {showDetail}</div> : ""}
					</div>
				</div>
				<div className="card-body rightPanel">
					{data.about ? (
						<div>
							<h3 className="card-title">
								<strong>About</strong>
							</h3>
							<p className="card-text">{data.about}</p>
						</div>
					) : (
						""
					)}
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
			<div className="pg-5"></div>
		</div>
	);
}
