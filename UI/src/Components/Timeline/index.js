import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useState, useEffect, useRef } from "react";
import Loader from "../../Shared/Loader";
import "./timeline.css";
import TimeLineSvg from "../../Shared/SVG/TimeLineSvg";

gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
	let currentScrollIndex = 0;
	const componentRef = useRef();
	const sliderRef = useRef();
	const panelYearRef = useRef([]);
	const [viewSlide, setViewSlide] = useState(0);

	const [Data, setData] = useState([
		{
			year: 2023,
			timeLine: "This year",
			header: "Softweb Solutions",
			url: "https://www.softwebsolutions.com/",
			about: "Technical Analyst, IOT Connect ( Sept, 2022 - Apr, 2023 )",
			detail: `I work as a ReactJS and NodeJS Developer on IOT Connect. I enhance UI, fix bugs, and manage AWS and Azure deployment. I ensure seamless operation by eliminating bugs and enhancing UI. I deploy instances on AWS and Azure for efficiency. My work involves cutting-edge tech and complex functionalities, improving code quality, adding CA Signed Individual authentication, migrating from Azure to AWS, and resolving Jira tickets.`,
			redirecting: "",
		},
		{
			year: 2022,
			timeLine: "Two year back",
			header: "Qmetry",
			url: "https://www.qmetry.com/",
			about: "Associate UI Developer, QTM4J ( June, 2021 - Sept, 2022 )",
			detail: `I joined QMetry's UI team, enhancing test management products like QTM, QTM4J, and QAS. As a UI developer, I improved code, addressed tickets, introduced features, and built a Chrome extension for exploratory testing. I completed a sprint flawlessly, gaining expertise in Jira workflows, API, and Atlassian tools, enhancing QTM4J, and refining test management processes.`,
			redirecting: "",
		},
		{
			year: 2021,
			timeLine: "Three year back",
			header: "Magenta",
			url: "https://www.magentabi.com/",
			about: "Web Developer, MagentaBI ( Dec, 2020 - June, 2021 )",
			detail: `MagentaBI is an SME-focused business intelligence startup specializing in visual data analysis from diverse sources. I worked as a ReactJS developer, enhancing UI components, replacing SQL Alchemy UI with custom ReactJS UI, implementing new tech stacks, collaborating remotely, and developing a CRM app for customer management.`,
			redirecting: "",
		},
		{
			year: 2021,
			header: "DAIICT",
			url: "https://www.daiict.ac.in/",
			timeLine: "Three year back ",
			about: "Masters of Science Information Technology ( 2019 - 2021 )",
			detail: `While pursuing my MSc IT at DAIICT, I enjoyed a comprehensive curriculum and supportive faculty. Collaborating with tech-savvy peers and building lifelong friendships enhanced my learning experience. The college nurtured camaraderie and teamwork, providing an enriching education in various IT domains.`,
			redirecting: "",
		},
		{
			year: 2019,
			timeLine: "Four year back",
			url: "https://www.bitmesra.ac.in/",
			header: "Birla Institute of Technology, Mesra",
			about: "Bachelor of Computer Applications ( 2016 - 2019 ) ",
			detail: `While studying BCA at Birla Institute of Technology - Mesra (BIT), I underwent a transformative phase. BIT sparked my software development journey and skills through diverse projects. Notably, I excelled in developing the Jharkhand Tourism app, showcasing user-friendly expertise. I also participated in DEBSOC, enhancing my college journey. BIT significantly shaped my career with invaluable lessons and practical insights.`,
			redirecting: "",
		},
		{
			year: 2015,
			timeLine: "Eight year back",
			header: "Sri Chaitanya techno School",
			url: "https://srichaitanyaschool.net/",
			about: "Intermediate ( 2015 - 2013 )",
			detail: `During my time at Sri Chaitanya Techno School, I had a enriching academic journey. The school's dedicated teachers and diverse activities fostered strong foundations in key subjects and valuable life skills. Active in sports and cultural events, I developed teamwork and leadership abilities. The school significantly contributed to my growth.`,
			redirecting: "",
		},
		{
			year: 2013,
			timeLine: "Ten year back",
			header: "Sun Flower Public School",
			url: "http://sunflowerschool.in/",
			about: "Matriculation ( 2011 - 2013 )",
			detail: `I attended Sunflower Public School for my CBSE matriculation. It offered a comprehensive education, focusing on subjects like Science, Math, and extracurricular activities. The committed teachers and diverse opportunities boosted my growth. Participating in events and clubs enriched my learning. The school greatly shaped my foundation and passion for education.`,
			redirecting: "",
		},
		{},
	]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		async function fetchMyAPI() {
			try {
				setLoading(true);
				let response = await fetch(`/api/career`);

				if (!response.ok) {
					throw new Error(`Failed to fetch data: ${response.statusText}`);
				}

				let responseData = await response.json();

				if (responseData.success) {
					setData([...responseData.data]);
				} else {
					throw new Error(responseData.message || "API response unsuccessful");
				}
			} catch (error) {
				console.error("An error occurred while fetching data:", error);
			} finally {
				setLoading(false);
			}
		}

		// fetchMyAPI();
	}, []);

	useLayoutEffect(() => {
		let currentPanelIndex = 0;
		let ctx = gsap.context(() => {
			let panels = gsap.utils.toArray(".panel");
			gsap.to(panels, {
				xPercent: -100 * (panels.length - 1),
				ease: "none",
				scrollTrigger: {
					trigger: sliderRef.current,
					pin: true,
					scrub: 1,
					snap: 1 / (panels.length - 1),
					end: () => "+=" + sliderRef.current.offsetWidth,
					markers: false,
					// onToggle: (self) => {
					// 	gsap.to(`panel`, {
					// 		duration: 0.2,
					// 		opacity: self.isActive ? 1 : 0, // if active then 1 or else 0.5
					// 		color: self.isActive ? "white" : "black",
					// 	});
					// },
					onUpdate: (self) => {
						const panelsLength = panels.length;
						let progress = self.progress;
						let ncurrentScrollIndex = Math.floor(progress * panelsLength);
						if (ncurrentScrollIndex !== currentScrollIndex) {
							currentScrollIndex = ncurrentScrollIndex;
							// console.log(panelYearRef.current[currentScrollIndex]);
							// panelYearRef.current[currentScrollIndex].classList.add("main-div"); // corresponding DOM node
							// const element = panelYearRef.current[currentScrollIndex];

							// Remove the class using the classList property
							// element?.classList.add("your-class-name");
							// span.className = "hidden";
							// console.log("scroll", currentScrollIndex, currentScrollIndex, viewSlide);
						}
					},
				},
			});
		}, componentRef);

		// console.log(viewSlide);
		return () => ctx.revert();
	});
	useEffect(() => {
		if (viewSlide !== currentScrollIndex) setViewSlide(currentScrollIndex);
		// console.log({ viewSlide, currentScrollIndex });
	}, [currentScrollIndex]);

	return (
		<>
			<div className="timeLineFrame">
				<div className="col-sm-1 contain1">
					<div className="careerHeaderText chtStart">
						<h3>C</h3>
						<h3>A</h3>
						<h3>R</h3>
						<h3>E</h3>
						<h3>E</h3>
						<h3>R</h3>
					</div>
					<TimeLineSvg className="wapper1" />
				</div>
				<div className="col-sm-2 contain2">
					{" "}
					<TimeLineSvg className="wapper2" />
				</div>
				<div className="col-sm-6 contain3"></div>
				<div className="col-sm-2 contain4">
					<div className="careerHeaderText chtEnd">
						<h3>T</h3>
						<h3>I</h3>
						<h3>M</h3>
						<h3>E</h3>
						<h3>L</h3>
						<h3>I</h3>
						<h3>N</h3>
						<h3>E</h3>
					</div>
					<TimeLineSvg className="wapper3" />
				</div>
				<div className="col-sm-1 contain5">
					<TimeLineSvg className="wapper4" />
				</div>
			</div>
			<div className="timeLineFrame">
				<div className="col-sm-1 shape1"></div>
				<div className="col-sm-2 shape2"></div>
				<div className="col-sm-6 shape3"></div>
				<div className="col-sm-2 shape4"></div>
				<div className="col-sm-1 shape5"></div>
			</div>
			<div className="" ref={componentRef}>
				<div ref={sliderRef} className="containers">
					{Data.map((val, ind) => {
						return (
							<div className={`panel`}>
								<div className="textContainer">
									<div className="col-sm-1 t1"></div>
									<div className="col-sm-2 t2" ref={panelYearRef.current[ind]}>
										<div className="textRotated">{val.timeLine}</div>
									</div>
									<div className="col-sm-6 t3 ">
										<h2 className={`textHeader ${currentScrollIndex === ind ? "showpanelHeader" : "hidepanelHeader"}`}>
											{val.header}
											{"  "}
											<a href="/career" target="_blank" rel="noreferrer">
												<i className="fa fa-external-link" aria-hidden="true"></i>
											</a>
										</h2>
										<div className="textAbout">
											<em>{val.about} </em>
										</div>
										<div className="textDetail">{val.detail}</div>
									</div>
									<div className="col-sm-2 t4">{val.year}</div>
									<div className="col-sm-1 t5"></div>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			<>{loading && <Loader />}</>
		</>
	);
}
