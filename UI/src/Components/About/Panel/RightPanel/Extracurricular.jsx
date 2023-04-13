import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Extracurricular(props) {
	return (
		<div>
			{props.data?.length &&
				props.data?.map((value, ind) => {
					return (
						<section className={`etcSection ${ind % 2 !== 0 ? "sectionBackground" : ""}`} key={ind}>
							<div className="">
								<h2 className="itemHeader">{value.section}</h2>
								<div className="carouselContainer">
									<Carousel className="itemPlacement" controls={value.content?.length > 1 ? true : false}>
										{value.content?.map((item, index) => {
											return (
												<React.Fragment key={index}>
													<Carousel.Item>
														<img className="d-block w-100 h-80 itemPlacement" src={item.img} alt={item.img} />
														<Carousel.Caption>
															<h3>{item.desc}</h3>
															<p></p>
														</Carousel.Caption>
													</Carousel.Item>
												</React.Fragment>
											);
										})}
									</Carousel>
								</div>
							</div>
						</section>
					);
				})}
			<div className="pg-5"></div>
		</div>
	);
}
