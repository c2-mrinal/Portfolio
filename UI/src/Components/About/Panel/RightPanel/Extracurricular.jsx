import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Extracurricular(props) {
	const [Data, setData] = useState({});
	useEffect(() => {
		setData(props);
	}, [props.data]);

	return (
		<div>
			{Data.data?.length &&
				Data.data?.map((value, ind) => {
					return (
						<section className={`etcSection ${ind % 2 !== 0 ? "sectionBackground" : ""}`} key={ind}>
							<div className="">
								<h2 className="itemHeader">{value.section}</h2>
								<div className="carouselContainer">
									<Carousel
										key={value.section}
										className="itemPlacement"
										controls={value.content?.length > 1 ? true : false}
									>
										{value.content?.map((item, index) => {
											return (
												<Carousel.Item key={index}>
													<img className="d-block w-100 h-80 itemPlacement" src={item.img} alt={item.img} />
													<Carousel.Caption>
														<h3>{item.header}</h3>
														<p>{item.desc}</p>
													</Carousel.Caption>
												</Carousel.Item>
											);
										})}
									</Carousel>
								</div>
								<div className="itemHeader"></div>
							</div>
						</section>
					);
				})}
			<div className="pg-5"></div>
		</div>
	);
}
