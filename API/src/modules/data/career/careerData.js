const { getCurrentYear } = require("../../common/comon");

const yearAge = (year) => {
	const currentYear = new Date().getFullYear();
	const res = currentYear - year;
	if (res === 0) {
		return "This Year";
	} else if (res === 1) {
		return `${res} Year Back`;
	} else {
		return `${res} Year's Back`;
	}
};
const careerData = [
	{
		year: 2024,
		age: getCurrentYear(new Date().getFullYear()),
		header: "Vrooms",
		url: "https://www.vrooms.in/",
		about: "Co-Founded( Sept, 2021 - Present )",
		detail: `Vrooms revolutionizes real estate by connecting brokers and customers across Lucknow, Kolkata, Ahmedabad, Delhi, and Kanpur. We tackle market challenges with innovative solutions, empowering seamless transactions through advanced tools and unwavering commitment to satisfaction. Your trusted partner in navigating the real estate journey.`,
		name: "Vrooms",
		value: "vrooms",
	},
	{
		year: 2024,
		age: getCurrentYear(2024),
		header: "Freelance",
		url: "https://www.nourl.com/",
		about: "Self Employed ( May, 2023 - Present )",
		detail: `I'm an experienced MERN developer with a diverse portfolio. At Zonvoir, I enhanced a pharmaceutical software, and at STIC Soft, I improved a fintech platform, delivering tailored solutions for each client.`,
		name: "Freelance",
		value: "freelance",
	},
	{
		year: 2023,
		age: getCurrentYear(2023),
		header: "Softweb Solutions",
		url: "https://www.softwebsolutions.com/",
		about: "Technical Analyst, IOT Connect ( Sept, 2022 - Apr, 2023 )",
		detail: `I work as a ReactJS and NodeJS Developer on IOT Connect. I enhance UI, fix bugs, and manage AWS and Azure deployment. I ensure seamless operation by eliminating bugs and enhancing UI. I deploy instances on AWS and Azure for efficiency. My work involves cutting-edge tech and complex functionalities, improving code quality, adding CA Signed Individual authentication, migrating from Azure to AWS, and resolving Jira tickets.`,
		name: "Softweb Solutions",
		value: "softwebSolutions",
	},
	{
		year: 2022,
		age: getCurrentYear(2022),
		header: "Qmetry",
		url: "https://www.qmetry.com/",
		about: "Associate UI Developer, QTM4J ( June, 2021 - Sept, 2022 )",
		detail: `I joined QMetry's UI team, enhancing test management products like QTM, QTM4J, and QAS. As a UI developer, I improved code, addressed tickets, introduced features, and built a Chrome extension for exploratory testing. I completed a sprint flawlessly, gaining expertise in Jira workflows, API, and Atlassian tools, enhancing QTM4J, and refining test management processes.`,
		name: "Qmetry",
		value: "qmetry",
	},
	{
		year: 2021,
		age: getCurrentYear(2021),
		header: "Magenta Connect",
		url: "https://www.magentabi.com/",
		about: "Web Developer, MagentaBI ( Dec, 2020 - June, 2021 )",
		detail: `MagentaBI is an SME-focused business intelligence startup specializing in visual data analysis from diverse sources. I worked as a ReactJS developer, enhancing UI components, replacing SQL Alchemy UI with custom ReactJS UI, implementing new tech stacks, collaborating remotely, and developing a CRM app for customer management.`,
		name: "Magenta Connect",
		value: "magentaBI",
	},
	{
		year: 2021,
		age: getCurrentYear(2021),
		header: "DAIICT",
		url: "https://www.daiict.ac.in/",
		about: "Masters of Science Information Technology ( 2019 - 2021 )",
		detail: `While pursuing my MSc IT at DAIICT, I enjoyed a comprehensive curriculum and supportive faculty. Collaborating with tech-savvy peers and building lifelong friendships enhanced my learning experience. The college nurtured camaraderie and teamwork, providing an enriching education in various IT domains.`,
		name: "Masters",
		value: "master",
	},
	{
		year: 2019,
		age: getCurrentYear(2019),
		url: "https://www.bitmesra.ac.in/",
		header: "Birla Institute of Technology, Mesra",
		about: "Bachelor of Computer Applications ( 2016 - 2019 ) ",
		detail: `While studying BCA at Birla Institute of Technology - Mesra (BIT), I underwent a transformative phase. BIT sparked my software development journey and skills through diverse projects. Notably, I excelled in developing the Jharkhand Tourism app, showcasing user-friendly expertise. I also participated in DEBSOC, enhancing my college journey. BIT significantly shaped my career with invaluable lessons and practical insights.`,
		name: "Bachlors",
		value: "bachlor",
	},
	{
		year: 2015,
		age: getCurrentYear(2015),
		header: "Sri Chaitanya techno School",
		url: "https://srichaitanyaschool.net/",
		about: "Intermediate ( 2015 - 2013 )",
		detail: `During my time at Sri Chaitanya Techno School, I had a enriching academic journey. The school's dedicated teachers and diverse activities fostered strong foundations in key subjects and valuable life skills. Active in sports and cultural events, I developed teamwork and leadership abilities. The school significantly contributed to my growth.`,
		name: "Intermediate",
		value: "intermediate",
	},
	{
		year: 2013,
		age: getCurrentYear(2013),
		header: "Sun Flower Public School",
		url: "http://sunflowerschool.in/",
		about: "Matriculation ( 2011 - 2013 )",
		detail: `I attended Sunflower Public School for my CBSE matriculation. It offered a comprehensive education, focusing on subjects like Science, Math, and extracurricular activities. The committed teachers and diverse opportunities boosted my growth. Participating in events and clubs enriched my learning. The school greatly shaped my foundation and passion for education.`,
		name: "Matriculation",
		value: "matriculation",
	},
];

module.exports = { careerData };
