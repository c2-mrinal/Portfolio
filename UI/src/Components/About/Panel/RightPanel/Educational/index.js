import React, { useState, useEffect } from "react";
import "../rightPanel.css";

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
					<div className="col-sm-12 col-md-3 educationHeaderContainer">
						<div>
							<a href={data.url}>
								<img className="educationImage" src={data?.img} height="150" width="150" alt="" loading="lazy" />
							</a>
						</div>
						<div>
							<em>{` ( ${data.term} ) `}</em>
						</div>
					</div>
					<div className="col-sm-12 col-md-9 infoTextContainer">
						<div className="">
							{data &&
								data.info?.map((info, ind) => {
									!showDetail && ind === 0 && showDetails(info[1], ind);
									return (
										<span
											className={`infoTextBox ${selectedIndex === ind ? "infoTextBoxSelected" : ""} `}
											onClick={() => showDetails(info[1], ind)}
											key={info[1]}
										>
											<strong>{info[0]} </strong>
										</span>
									);
								})}
						</div>
						{showDetail ? <div className="detailsStyled"> {showDetail}</div> : ""}
					</div>
				</div>
				<div className="card-body rightPanel">
					{data.about ? (
						<div>
							<h2 className="card-title">
								<strong>About</strong>
							</h2>
							<p className="card-text">{data.about}</p>
						</div>
					) : (
						""
					)}
					<div>
						{data?.projects ? (
							<>
								<h2>
									{" "}
									<strong>Projects</strong>
								</h2>
								{data.projects.map((data, ind) => {
									return (
										<React.Fragment key={ind}>
											<h4>
												<strong>{data.name}</strong>
											</h4>
											<div>{data.description}</div>
											<div>
												<span>
													<strong>Stacked Used: </strong>
												</span>
												<span>
													{Object.entries(data.skills).map((val) => {
														return (
															<span className="mg-10" key={val[0]}>
																<i className={val[1]}></i> {val[0]}
															</span>
														);
													})}
												</span>
											</div>
											<br />
										</React.Fragment>
									);
								})}
							</>
						) : (
							""
						)}
					</div>
					<section>
						{data.degreeImg ? (
							<div className="degreeImgContainer">
								<img className="h-100 w-100" src={data.degreeImg} alt="marksheet" loading="lazy" />
							</div>
						) : (
							""
						)}
					</section>
				</div>
			</div>
		</div>
	);
}
