const { fetchImageFromServer } = require("../../common/comon");

const folderData = {
	folders: {
		Mrinal: {
			name: "Mrinal",
			isFolder: true,
			isOpen: true,
			data: [],
			items: [
				{
					name: "Experince",
					isFolder: true,
					isOpen: true,
					items: [
						{
							name: "VROOMS",
							isFolder: false,
							value: "vrooms",
							category: 2,
							items: [],
						},
						{
							name: "FreeLance",
							isFolder: false,
							value: "freelance",
							category: 2,
							items: [],
						},
						{
							name: "Softweb Solutions",
							isFolder: false,
							value: "softwebSolutions",
							category: 2,
							items: [],
						},
						{
							name: "Qmetry",
							isFolder: false,
							value: "qmetry",
							category: 2,
							items: [],
						},
						{
							name: "Magenta Connect",
							isFolder: false,
							value: "magentaBI",
							category: 2,
							items: [],
						},
						{
							name: "DAIICT",
							isFolder: false,
							value: "daiict",
							category: 2,
							items: [],
						},
					],
				},
				{
					name: "Eductional",
					isFolder: true,
					items: [
						{
							name: "Masters",
							isFolder: false,
							value: "master",
							category: 1,
							items: [],
						},
						{
							name: "Bachlors",
							isFolder: false,
							value: "bachlor",
							category: 1,
							items: [],
						},
						{
							name: "Intermediate",
							isFolder: false,
							value: "intermediate",
							category: 1,
							items: [],
						},
						{
							name: "Matriculation",
							isFolder: false,
							value: "matriculation",
							category: 1,
							items: [],
						},
					],
				},
				{
					name: "Hobbies",
					isFolder: false,
					value: "hobbie",
					category: 3,
					items: [],
				},
				{
					name: "Achievments",
					isFolder: false,
					value: "achive",
					category: 3,
					items: [],
				},
			],
		},
		Website: {
			name: "Website",
			isFolder: true,
			items: [
				{
					name: "Frontend",
					isFolder: true,
					items: [
						{
							name: "UI Work-Flow",
							value: "front_workflow",
							isFolder: false,
							category: 4,
							items: [],
						},
						{
							name: "UI Performance",
							value: "front_perform",
							category: 7,
							isFolder: false,
							items: [],
						},
					],
				},
				{
					name: "Backend",
					isFolder: true,
					items: [
						{
							name: "API Work-Flow",
							value: "back_workflow",
							isFolder: false,
							category: 4,
							items: [],
						},
						{
							name: "API Performance",
							value: "back_perform",
							category: 7,
							isFolder: false,
							items: [],
						},
					],
				},
				{
					name: "Depolyment",
					isFolder: true,
					items: [
						{
							name: "Work-Flow",
							value: "depoly_workflow",
							isFolder: false,
							category: 4,
							items: [],
						},
					],
				},
			],
		},
	},
	defaultSelected: {
		name: "Vrooms",
		isFolder: false,
		value: "vrooms",
		category: 2,
	},
};

const aboutData = {
	master: {
		img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Dhirubhai_Ambani_Institute_of_Information_and_Communication_Technology_logo.png/220px-Dhirubhai_Ambani_Institute_of_Information_and_Communication_Technology_logo.png",
		info: [
			["College", "Dhirubhai Ambani Institute of Information and Communication Technology"],
			["Degree", "Masters of Science"],
			["Specialization", "Information Technology"],
			["Location", "Gandhinagar - GJ"],
		],
		url: "https://www.daiict.ac.in/",
		// degreeImg:
		// 	"https://raw.githubusercontent.com/c2-mrinal/PROJECT_IMAGES/main/Portfolio/Images/Achievments/Javascript_basics.png",
		about:
			"During my time at Dhirubhai Ambani Institute of Information and Communication Technology (DAIICT) pursuing my MSc IT, I had a fulfilling experience. The college offered a well-structured curriculum that provided in-depth knowledge in various IT domains. The faculty members were knowledgeable and supportive, guiding us throughout our academic journey. I also had the pleasure of making lifelong friends who shared my passion for technology. The college environment fostered a sense of camaraderie and encouraged collaboration. Overall, my experience at DAIICT was enriching, and I am grateful for the education and friendships I gained during my time there.",
		term: "2019 - 2021",
		projects: [
			{
				name: "The KabdaiWala",
				skills: {
					Html5: "fa-brands fa-html5",
					Css3: "fa-brands fa-css3-alt",
					VueJS: "fa-brands fa-vuejs",
					JavaScript: "fa-brands fa-square-js",
					"Rest API": "fa-solid fa-gear",
					ExpressJS: "fa-brands fa-square-js",
					NodeJS: "fa-brands fa-node",
					MongoDB: "fa-sharp fa-solid fa-database",
				},
				description: `A user-friendly interface for selling and buying scrap metal that allows both customers and dealers to register. This website also has 3R's tips and tricks. Customer and Dealer both have their own profile page where the customer can check the status of their scrap deal and the dealer can check the status and change the price of the scrap items they are purchasing.`,
				url: "",
			},
			{
				name: "Quantitive algorithm trading",
				skills: {
					Html5: "fa-brands fa-html5",
					Css3: "fa-brands fa-css3-alt",
					Bootstrap: "fa-brands fa-bootstrap",
					JavaScript: "fa-brands fa-square-js",
					ChartJS: "fa-solid fa-chart-simple",
				},
				description: `It includes all of the required trading instruments and data for stock trading. We were able to access data using various APIs to have it under one roof. Currency converter, trading news, live trading info, and several other features areavailable.`,
				url: "",
			},
			{
				name: "Rating & Review",
				skills: {
					Html5: "fa-brands fa-html5",
					Css3: "fa-brands fa-css3-alt",
					Bootstrap: "fa-brands fa-bootstrap",
					JavaScript: "fa-brands fa-square-js",
					ChartJS: "fa-solid fa-chart-simple",
				},
				description: `It rates and reviews a wide range of entertainment material (like Movies, Games, Tv series, Songs, and more). It like IMDB and Metrics, assigns a ranking based on user input.`,
				url: "",
			},
			{
				name: "Urban clap",
				skills: {
					Html5: "fa-brands fa-html5",
					Css3: "fa-brands fa-css3-alt",
					Bootstrap: "fa-brands fa-bootstrap",
					JavaScript: "fa-brands fa-square-js",
					ChartJS: "fa-solid fa-chart-simple",
				},
				description: `We built a directory to provide customers with expert resources under one roof. We used about ten entities, as well as DDL and DML. We also created a number of complex queries to make it easier to access them.`,
				url: "",
			},
		],
	},
	bachlor: {
		img: "https://upload.wikimedia.org/wikipedia/en/d/d2/Birla_Institute_of_Technology_Mesra.png",
		info: [
			["College", "Birla Institute of Technology, Mesra"],
			["Degree", "Bachelor of Computer Applications"],
			["Specialization", "Computer Application"],
			["Location", "Ranchi - JH"],
		],
		url: "https://www.bitmesra.ac.in/",
		// degreeImg:
		// 	"https://raw.githubusercontent.com/c2-mrinal/PROJECT_IMAGES/main/Portfolio/Images/Achievments/Javascript_basics.png",
		about:
			"During my time at Birla Institute of Technology - Mesra (BIT) pursuing my BCA, I had a transformative experience. It was at BIT that I embarked on my software development journey, working on various projects that honed my skills. One project that stands out is my work on the Jharkhand Tourism application, where I applied my knowledge to create an engaging and user-friendly platform. Additionally, I joined the college society DEBSOC, participating in extracurricular activities that further enriched my college experience. BIT became a turning point in my life, as I learned valuable lessons and gained practical insights that continue to shape my career.",
		term: "2016 - 2019",
		projects: [
			{
				name: "JHARKHAND TOURISM",
				skills: {
					Html5: "fa-brands fa-html5",
					Css3: "fa-brands fa-css3-alt",
					Bootstrap: "fa-brands fa-bootstrap",
					JavaScript: "fa-brands fa-square-js",
					ChartJS: "fa-solid fa-chart-simple",
				},
				description: `It was a static page for better User Interaction . It provide winsome glimpse of jharkhand , for attracting more tourism to Jharkhand.`,
				url: "",
			},
			{
				name: "REAL TIME WEATHER",
				skills: {
					Html5: "fa-brands fa-html5",
					Css3: "fa-brands fa-css3-alt",
					JavaScript: "fa-brands fa-square-js",
					"Rest API": "fa-solid fa-gear",
				},
				description: `The site shows current weather conditions in all cities around the world in real-time. It also compares functionality between cities using an extremely simple graphical user interface. It uses an open REST API to provide details.`,
				url: "",
			},
			{
				name: "SPORT ADDA",
				skills: {
					".Net": "fa-brands fa-microsoft",
					"Visual Studio": "fa-solid fa-code",
					"MS Access": "fa-brands fa-microsoft",
					"C#": "fa-brands fa-microsoft",
				},
				description: `It was .net framework program with MS Access database for a sport shop
      where seller can create a bill for its available products and can access list of
      stock available in store.`,
				url: "",
			},
		],
	},
	intermediate: {
		img: "https://raw.githubusercontent.com/c2-mrinal/PROJECT_IMAGES/main/Portfolio/Images/Degree/chitanta.png",
		info: [
			["School", " Sri Chaitanya techno School"],
			["Qualification", " Intermediate "],
			["Specialization", "Phyics, Chemistry, Mathematics, English, Physical Education"],
			["Location", "Vishakapatnam - AP"],
		],
		url: "https://srichaitanyaschool.net/",
		// degreeImg:
		// 	"https://raw.githubusercontent.com/c2-mrinal/PROJECT_IMAGES/main/Portfolio/Images/Achievments/Javascript_basics.png",
		about:
			"During my time at Sri Chaitanya Techno School for my intermediate education, I had a memorable experience. The school provided a strong foundation in subjects such as Physics, Chemistry, Math, English, and Physical Education. The teachers were highly knowledgeable and dedicated, offering guidance and support to ensure our academic success. I actively participated in various extracurricular activities, such as sports and cultural events, which helped me develop teamwork and leadership skills. Sri Chaitanya Techno School played a pivotal role in shaping my academic growth and fostering a well-rounded personality. I am grateful for the valuable education and fond memories I gained during my high school years.",
		term: "2015 - 2013",
	},
	matriculation: {
		img: "https://raw.githubusercontent.com/c2-mrinal/PROJECT_IMAGES/main/Portfolio/Images/Degree/sunflowerSchool.png",
		info: [
			["School", " Sun Flower Public School"],
			["Qualification", " Intermediate "],
			["Specialization", "Mathematics, Science, Social Science, English, Sanskrit"],
			["Location", "Begusarai - BR"],
		],
		url: "http://sunflowerschool.in/",
		// degreeImg:
		// 	"https://raw.githubusercontent.com/c2-mrinal/PROJECT_IMAGES/main/Portfolio/Images/Achievments/Javascript_basics.png",
		about:
			"During my time at Sunflower Public School, where I pursued my matriculation education under the CBSE board, I had a fulfilling academic journey. The school provided a well-rounded education, emphasizing not only on core subjects like Science, Math, English, Sanskrit, and Social Science but also promoting extracurricular activities. The dedicated faculty members were supportive and encouraged a conducive learning environment. Participating in various school events, competitions, and clubs enhanced my overall growth and development. Sunflower Public School played a significant role in shaping my educational foundation and fostering a love for learning that continues to drive me forward in my academic and personal pursuits.",
		term: "2011 - 2013",
	},
	vrooms: {
		name: "Vrooms",
		designation: "Co-Founder - Teach Lead",
		department: "",
		startDate: "2021",
		endDate: "present",
		website: "www.vrooms.in",
		linkedin: "",
		img: "https://raw.githubusercontent.com/c2-mrinal/PROJECT_IMAGES/main/Portfolio/Images/Company/vroomsIcon.jpeg",
		skills: {
			Html5: "fa-brands fa-html5",
			Css3: "fa-brands fa-css3-alt",
			ReactJS: "fa-brands fa-react ",
			ReduxJS: "fa-brands fa-react",
			Debugging: "fa-solid fa-bug ",
			Bootstrap: "fa-brands fa-bootstrap",
			JavaScript: "fa-brands fa-square-js",
			"Rest API": "fa-solid fa-gear",
			ExpressJS: "fa-brands fa-square-js",
			NodeJS: "fa-brands fa-node",
			MongoDB: "fa-sharp fa-solid fa-database",
			"Agile Development": "fa-regular fa-circle",
			ChartJS: "fa-solid fa-chart-simple",
		},
		notableWork: [
			"Modifications that improve the Node and Express code bases by removing code duplication and repetitions",
			"CA Signed Individual has been added as a new authentication type for IOT devices.",
			"Changed the code base from Azure to the AWS cloud platform.",
			"Jira tickets were resolved in accordance with the sprint and priority.",
		],
		about: `Vrooms is a dynamic platform poised to redefine the landscape of real estate transactions, seamlessly connecting brokers with customers to streamline estate leads and deals. Co-founded by industry visionaries, Mrinal Kasyap (Me) and Piyush Mishra, Vrooms operates across a network spanning multiple cities, including Lucknow, Kolkata, Ahmedabad, Delhi, and Kanpur.

		At Vrooms, we recognize the inherent challenges in navigating the real estate market. With our innovative approach, we bridge the gap between brokers and customers, fostering efficient communication and facilitating successful transactions. Our platform empowers users with comprehensive tools and resources, enabling them to explore, negotiate, and finalize deals with confidence.
		
		What sets Vrooms apart is our unwavering commitment to customer satisfaction and industry excellence. By harnessing cutting-edge technology and leveraging our extensive network, we deliver unparalleled value to both brokers and customers alike. Whether you're a seasoned broker or a prospective homeowner, Vrooms is your trusted partner every step of the way.
		`,
		// activity: [
		// 	{
		// 		img: "https://drive.google.com/uc?export=view&id=1yANirVF7uTFirZn0rNXXrkG25iBgveRD",
		// 		name: "SPL Winner 2022",
		// 	},
		// 	{
		// 		img: "https://drive.google.com/uc?export=view&id=1Ikm3YxWF6zGexV3G-F8WSTAi45ut53UG",
		// 		name: "Team Lunch",
		// 	},
		// 	{
		// 		img: "https://drive.google.com/uc?export=view&id=1ig5O15sw-jQvblYQHq5uDVsQPLgJBobd",
		// 		name: "Festival",
		// 	},
		// ],
	},

	freelance: {
		name: "FreeLancer",
		designation: "MERN Developer",
		department: "",
		startDate: "Apr 2023",
		endDate: "Present",
		website: "",
		linkedin: "",
		img: "https://d6xcmfyh68wv8.cloudfront.net/learn-content/uploads/2020/11/freelancer_earn-scaled.jpg",
		skills: {
			Html5: "fa-brands fa-html5",
			Css3: "fa-brands fa-css3-alt",
			ReactJS: "fa-brands fa-react ",
			ReduxJS: "fa-brands fa-react",
			Debugging: "fa-solid fa-bug ",
			Bootstrap: "fa-brands fa-bootstrap",
			JavaScript: "fa-brands fa-square-js",
			"Rest API": "fa-solid fa-gear",
			ExpressJS: "fa-brands fa-square-js",
			NodeJS: "fa-brands fa-node",
			MongoDB: "fa-sharp fa-solid fa-database",
			"Agile Development": "fa-regular fa-circle",
			ChartJS: "fa-solid fa-chart-simple",
		},
		notableWork: [
			"Enhanced key pages of a pharmaceutical software platform as a freelance MERN developer at Zonvoir.",
			"Developed responsive pages and components for a fintech platform at STIC Soft, boosting versatility and user experience.",
			"Successfully collaborated with startups and high-end product companies, delivering tailored solutions as a freelance MERN developer.",
			"Utilized problem-solving skills and a client-centric approach to overcome challenges and ensure project success.",
		],
		about: `With a diverse portfolio spanning from small startups to high-end products, I bring extensive experience as a MERN (MongoDB, Express.js, React.js, Node.js) developer. At Zonvoir, I collaborated as a freelancer, enhancing a pharmaceutical software by developing key pages, thereby elevating the platform's functionality.

		Additionally, at STIC Soft, I played a pivotal role in the development of responsive pages and components for a fintech platform. My contributions significantly enhanced the platform's versatility and user experience.
		
		With a keen eye for detail and a commitment to excellence, I consistently deliver tailored solutions that meet the unique needs of each client. My expertise in the MERN stack enables me to tackle diverse challenges, ensuring the success of every project I undertake.
		`,
		// activity: [
		// 	{
		// 		img: "https://drive.google.com/uc?export=view&id=1yANirVF7uTFirZn0rNXXrkG25iBgveRD",
		// 		name: "SPL Winner 2022",
		// 	},
		// 	{
		// 		img: "https://drive.google.com/uc?export=view&id=1Ikm3YxWF6zGexV3G-F8WSTAi45ut53UG",
		// 		name: "Team Lunch",
		// 	},
		// 	{
		// 		img: "https://drive.google.com/uc?export=view&id=1ig5O15sw-jQvblYQHq5uDVsQPLgJBobd",
		// 		name: "Festival",
		// 	},
		// ],
	},
	softwebSolutions: {
		name: "Softweb Solutions",
		designation: "Technical Analyst",
		department: "IOT Connect (Product) ",
		startDate: "Sept 2022",
		endDate: "Apr 2023",
		website: "https://www.softwebsolutions.com/",
		linkedin: "https://www.linkedin.com/company/softwebsolutionsinc/mycompany/",
		img: "https://www.softwebsolutions.com/wp-content/themes/softwebsolutions/images/softweb-logo.svg",
		skills: {
			Html5: "fa-brands fa-html5",
			Css3: "fa-brands fa-css3-alt",
			ReactJS: "fa-brands fa-react ",
			ReduxJS: "fa-brands fa-react",
			Debugging: "fa-solid fa-bug ",
			Bootstrap: "fa-brands fa-bootstrap",
			JavaScript: "fa-brands fa-square-js",
			"Rest API": "fa-solid fa-gear",
			ExpressJS: "fa-brands fa-square-js",
			NodeJS: "fa-brands fa-node",
			MongoDB: "fa-sharp fa-solid fa-database",
			"Agile Development": "fa-regular fa-circle",
			ChartJS: "fa-solid fa-chart-simple",
		},
		notableWork: [
			"Modifications that improve the Node and Express code bases by removing code duplication and repetitions",
			"CA Signed Individual has been added as a new authentication type for IOT devices.",
			"Changed the code base from Azure to the AWS cloud platform.",
			"Jira tickets were resolved in accordance with the sprint and priority.",
		],
		about: `In my role as a ReactJS and NodeJS Developer, I am part of the team working on the IOT Connect product. This product showcases connectivity and diverse functionalities for IOT devices, including edge devices, gateways, spheres, and more. My responsibilities involve resolving bugs, updating the UI to align with the requirements of each user story, and overseeing the deployment process for AWS and Azure instances.

		Within the IOT Connect project, I contribute to the seamless operation and user experience by ensuring bug-free code and implementing necessary UI enhancements. Additionally, I am responsible for managing the deployment of instances on both AWS and Azure platforms, ensuring smooth and efficient deployment procedures.
		
		Working on IOT Connect has provided me with valuable experience in working with cutting-edge technologies and handling complex functionalities.`,
		activity: [
			{
				img: "https://raw.githubusercontent.com/c2-mrinal/PROJECT_IMAGES/main/Portfolio/Images/softwebSolutions/AEEE9DA7-264D-451B-B821-A166DA5100A6_1_201_a.jpeg",
				name: "SPL Winner 2022",
			},
			{
				img: "https://raw.githubusercontent.com/c2-mrinal/PROJECT_IMAGES/main/Portfolio/Images/softwebSolutions/PHOTO-2022-10-20-23-59-50.jpeg",
				name: "Team Lunch",
			},
			{
				img: "https://raw.githubusercontent.com/c2-mrinal/PROJECT_IMAGES/main/Portfolio/Images/softwebSolutions/IMG_9343.jpeg",
				name: "Festival",
			},
		],
	},
	qmetry: {
		name: "Qmetry",
		designation: "Associate UI Developer",
		department: "QTM4J",
		startDate: "June 2021",
		endDate: "Sept 2022",
		website: "https://www.qmetry.com/",
		linkedin: "https://www.linkedin.com/company/qmetry/",
		img: "https://s30307.pcdn.co/assets/images/logo.svg",
		skills: {
			Html5: "fa-brands fa-html5",
			Bootstrap: "fa-brands fa-bootstrap",
			ReactJS: "fa-brands fa-react",
			ReduxJS: "fa-brands fa-react",
			Debugging: "fa-solid fa-bug",
			JavaScript: "fa-brands fa-square-js",
			"Rest API": "fa-solid fa-gear",
			SonarLint: "fa-solid fa-circle-exclamation",
			BackboneJS: "fa-solid fa-exclamation",
			JIRA: "fa-brands fa-jira",
			"Chrome Extension": "fa-brands fa-chrome",
			"Agile Development": "fa-regular fa-circle",
			Webpack: "fa-solid fa-exclamation",
			ChartJS: "fa-solid fa-chart-simple",
		},
		notableWork: [
			"Understanding Jira colud, Jira Server, and Jira Confluence workFlow and API data flow.",
			"Complete Atlassian Kit for JIRA knowledge and implementation in 'Qmerty Test Management for Jira'.",
			"On-page document viewer for many uploaded text files.",
			"By developing custom functionality on ChartJS, created chart drill down report (in tabular view).",
			"Converted on DOM HTML element rendering to  virtualized element for Folder tree Directory.",
			"Chrome Extension Modification by the most recent V8 engine manager version and service worker (implemented using core Javascript, jQuery, and Backbone JS).",
		],
		about: `As a react developer, I joined the QTM4J UI team at QMetry, a product-based firm offering test management products like QTM, QTM4J, and QAS. QTM4J integrates with Atlassian Jira for test management and exploratory testing. In my role as a UI developer, I enhance the codebase, address product tickets, introduce new features, and develop a chrome extension for exploratory testing. I was commended for successfully completing a problem-free sprint. These responsibilities have provided valuable experience, allowing me to contribute to the improvement of QTM4J and support efficient test management processes.`,
		activity: [
			{
				img: "https://raw.githubusercontent.com/c2-mrinal/PROJECT_IMAGES/main/Portfolio/Images/qmetry/IMG_5780.jpeg",
				name: "Festival",
			},
			{
				img: "https://raw.githubusercontent.com/c2-mrinal/PROJECT_IMAGES/main/Portfolio/Images/qmetry/Team_Lunch.jpeg",
				name: "Team Lunch",
			},
			{
				img: "https://raw.githubusercontent.com/c2-mrinal/PROJECT_IMAGES/main/Portfolio/Images/qmetry/Gift.jpeg",
				name: "Parting Gift",
			},
		],
	},
	magentaBI: {
		name: "Magenta Connect",
		designation: "Web Developer",
		department: "MagentaBI",
		startDate: "Dec 2020",
		endDate: "June 2021",
		website: "https://www.magentabi.com/",
		linkedin: "https://www.linkedin.com/company/mymagenta/",
		img: "https://media.licdn.com/dms/image/C4E0BAQFv7OwA1N6scQ/company-logo_200_200/0/1614262740739?e=1687996800&v=beta&t=TwFz_a-jZUHVZjoas32mSHon5RbC4dUjhQqkSza1in4",
		skills: {
			Html5: "fa-brands fa-html5",
			Css3: "fa-brands fa-css3-alt",
			ReactJS: "fa-brands fa-react",
			ReduxJS: "fa-brands fa-react",
			Debugging: "fa-solid fa-bug",
			Bootstrap: "fa-brands fa-bootstrap",
			JavaScript: "fa-brands fa-square-js",
			D3: "fa-solid fa-chart-simple",
			Docker: "fa-brands fa-docker",
			SQLAlchecmy: "fa-sharp fa-light fa-database",
		},
		notableWork: [
			"Created and replaced the entire SQL Alchemy UI Interface with custom made UI with reactJS componennt (with features like drag and drop, resizing, custom component creation and more) ",
			"Code Modification",
			"Learn New stacks and implemented on Product",
			"Team Collabration while Pandemic Situation",
			"Conducted R&D on CRM (Customer Relationship Management) and Created our company oriented app to handel customers details",
		],
		about: `MagentaBI is a business intelligence startup that focuses on SMEs. It also provides visual data
    analysis from tabular data (excel, tally, databases, and more).
    At Magenta, I had the pleasure of working as a react js developer, where I created a variety of
    UI pages and updated the code base of many components. To improve the development of
    each UI component.`,
		activity: [
			{
				img: "https://raw.githubusercontent.com/c2-mrinal/PROJECT_IMAGES/main/Portfolio/Images/magenta/625C8CC4-61EA-4F05-944E-CA585BEF021E_1_105_c.jpeg",
				name: "Team Trip",
			},
			{
				img: "https://raw.githubusercontent.com/c2-mrinal/PROJECT_IMAGES/main/Portfolio/Images/magenta/DC66BDC3-0BC5-40EA-9264-03C3037DDAB1_1_105_c.jpeg",
				name: "Brain Storming",
			},
			{
				img: "https://raw.githubusercontent.com/c2-mrinal/PROJECT_IMAGES/main/Portfolio/Images/magenta/DE60C5DE-A6A9-47AE-A375-1CCA60FA77D8_1_105_c.jpeg",
				name: "Team Dinner",
			},
		],
	},
	daiict: {
		name: "DAIICT",
		designation: "Developer Intern",
		department: "Summer Intern",
		startDate: "May 2020",
		endDate: "Aug 2020",
		website: "https://www.daiict.ac.in/",
		linkedin: "https://www.linkedin.com/school/dhirubhai-ambani-institute-of-information-and-communication-technology/",
		img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Dhirubhai_Ambani_Institute_of_Information_and_Communication_Technology_logo.png/220px-Dhirubhai_Ambani_Institute_of_Information_and_Communication_Technology_logo.png",
		skills: {
			Html5: "fa-brands fa-html5",
			Css3: "fa-brands fa-css3-alt",
			Bootstrap: "fa-brands fa-bootstrap",
			JavaScript: "fa-brands fa-square-js",
			VueJS: "fa-brands fa-vuejs",
			ExpressJS: "fa-brands fa-square-js",
			NodeJS: "fa-brands fa-node",
		},
		notableWork: [
			"Developed Vue.js single-page web app, showcasing adaptability to new technologies.",
			"Integrated APIs for efficient data handling, demonstrating backend development skills.",
			"Gained hands-on experience in web development during summer internship, using Vue.js, Express.js, and Node.js.",
		],
		about: `I created a single-page Web App utilizing Vue-Cli and NodeJS, with the entire application relying on an API for streamlined and reliable data handling. This project provided an opportunity to learn VueJs, a new technology, and develop APIs using JSON. Through this experience, I gained valuable knowledge in building dynamic web applications and honed my skills in working with VueJs and API development.`,
		activity: [
			{
				img: "https://raw.githubusercontent.com/c2-mrinal/PROJECT_IMAGES/main/Portfolio/Images/DAIICT/7E14067E-A3D3-4BA7-9F2D-D30A268E3C8F_1_105_c.jpeg",
				name: "Fest",
			},
			{
				img: "https://raw.githubusercontent.com/c2-mrinal/PROJECT_IMAGES/main/Portfolio/Images/DAIICT/7B01BF3D-FC46-4563-9B46-E82DA0C2CA10_1_201_a.jpeg",
				name: "Garba",
			},
			{
				img: "https://raw.githubusercontent.com/c2-mrinal/PROJECT_IMAGES/main/Portfolio/Images/DAIICT/10642.JPEG",
				name: "Learing",
			},
		],
	},
	hobbie: [
		{
			section: "Sports",
			content: [
				{
					img: "https://raw.githubusercontent.com/c2-mrinal/PROJECT_IMAGES/main/Portfolio/Images/Hobbies/2D14BB1A-05CB-4765-BC1D-5E5D8233A518_1_105_c.jpeg",
					header: "Cricket",
					desc: "Passionately swinging bats, chasing boundaries, fielding with precision—cricket ignites my spirit, connecting me to camaraderie, skill, and sheer exhilaration.",
				},
				{
					img: "https://raw.githubusercontent.com/c2-mrinal/PROJECT_IMAGES/main/Portfolio/Images/Hobbies/52041D6B-B7BF-42C9-8C8F-7E0650849B11_1_105_c.jpeg",
					header: "Cricket",
					desc: "Passionately swinging bats, chasing boundaries, fielding with precision—cricket ignites my spirit, connecting me to camaraderie, skill, and sheer exhilaration.",
				},
			],
		},
		{
			section: "Reading",
			content: [
				{
					img: "https://raw.githubusercontent.com/c2-mrinal/PROJECT_IMAGES/main/Portfolio/Images/Hobbies/book__reading.jpeg",
					header: "History",
					desc: "Passionate reader with a love for words, exploring worlds through books, and unraveling stories with each page turned.",
				},
			],
		},
	],
	achive: [
		{
			section: "Pat On Back",
			expire: "",
			content: [
				{
					img: "https://raw.githubusercontent.com/c2-mrinal/PROJECT_IMAGES/main/Portfolio/Images/Achievments/Pat_on_back.png",
					desc: "Qmetry",
				},
			],
		},
		{
			section: "Problem Solving (Basic)",
			expire: "",
			content: [
				{
					img: "https://raw.githubusercontent.com/c2-mrinal/PROJECT_IMAGES/main/Portfolio/Images/Achievments/Problem_solving_basics.png",
					desc: "Hacker Rank ",
				},
			],
		},
		{
			section: "JavaScript (Basic)",
			expire: "",
			content: [
				{
					img: "https://raw.githubusercontent.com/c2-mrinal/PROJECT_IMAGES/main/Portfolio/Images/Achievments/Javascript_basics.png",
					desc: "Hacker Rank ",
				},
			],
		},
	],
	front_workflow: {
		header: "Workflow",
		data: [
			{
				icon: "fa-solid fa-timeline",
				header: "Development Duration",
				desc: [
					" It took a total of 4 months to develop the portfolio from scratch, with the first month dedicated to planning and design, and the subsequent 3 months focused on development, testing, and deployment.",
					"Project kickoff, goal setting, and requirements.",
					"Design system development and prototyping.",
					"Simultaneous section development.",
					"Interactive features, animations, and Node API integration.",
					"Comprehensive testing, optimization, and deployment.",
				],
			},
			{
				icon: "fa-solid fa-box-open",
				header: "Dependencies",
				desc: [
					"Carefully selected dependencies to optimize UI performance and maintain control over design and functionality.",
					"Key dependencies include:",
				],
				list: [
					{ "Font Awesome Icons": "Used for high-quality and scalable icons." },
					{ "Redux Toolkit": "Streamlined state management for a responsive and efficient UI." },
					{ Bootstrap: "Employed for its responsive grid system and UI components." },
					{ "D3 Library": "Leveraged for creating interactive and data-driven visualizations." },
					{ "GSAP (GreenSock Animation Platform)": "Powering fluid animations and smooth transitions." },
					{ "React and Related Libraries": "For building a dynamic and interactive user interface." },
					{ "Redux and Redux Thunk": "Managing complex application state seamlessly." },
					{ "React Router": " Enabling smooth and intuitive navigation within the portfolio." },
					{ "Web Vitals": " Ensured top-notch performance and user experience." },
				],
			},
			{
				icon: "fa-regular fa-hand-pointer",
				header: "Home Page - Cursor Animations",
				desc: [
					"Crafted a captivating home page that responds to cursor movements.",
					"Implemented subtle yet engaging hover effects for interactive elements.",
					"Enabled users to download your resume with a user-friendly functionality.",
					"Leveraged window event listeners to orchestrate cursor-based animations, providing a unique and immersive user experience.",
				],
			},
			{
				icon: "fa-solid fa-dna",
				header: "Career Page - Horizontal Timeline",
				desc: [
					"Developed a visually striking career page centered around a horizontal timeline.",
					"Users can smoothly scroll through your professional journey, providing a concise yet comprehensive overview of your career milestones.",
					"Utilized the GSAP library to create seamless horizontal scrolling animations, enhancing the storytelling aspect of this page.",
				],
			},
			{
				icon: "fa-solid fa-bullseye",
				header: "Skill Page - Interactive Bubbles",
				desc: [
					"Designed a skill showcase page featuring dynamic and interactive skill bubbles.",
					"Allowed users to freely interact with and drag skill bubbles across the screen.",
					"Implemented informative tooltips for in-depth skill exploration.",
					"Utilized the D3 library for creating visually appealing and data-rich skill representations, making it an engaging and informative section.",
				],
			},
			{
				icon: "fa-regular fa-address-card",
				header: "About Page - Detailed Profile",
				desc: [
					"Constructed a comprehensive 'About Me' page offering a deep dive into your background.",
					"Sections include your professional experience, educational achievements, personal interests and hobbies, notable accomplishments, and insights about your portfolio website.",
					"Designed a user-friendly folder tree structure for effortless navigation, with dynamic data rendering and the ability to explore your profile details in a structured manner.",
				],
			},
			{
				icon: "fa-solid fa-envelopes-bulk",
				header: "Contact Page - Seamless Communication",
				desc: [
					"Facilitated direct and convenient communication through the Contact Page.",
					"Equipped with comprehensive contact information, including various channels for connecting with you.",
					"Seamlessly integrated a mail feature using a Node API, ensuring a smooth and responsive user experience when reaching out.",
				],
			},
			{
				icon: "",
				header: "",
				desc: ["", "", ""],
			},
		],
	},

	front_perform: {
		img: "",
		info: [],
		about: "",
	},
	back_workflow: {
		header: "Workflow",
		data: [
			{
				icon: "fa-solid fa-timeline",
				header: "Development Duration",
				desc: [
					" It took a total of 4 months to develop the portfolio from scratch, with the first month dedicated to planning and design, and the subsequent 3 months focused on development, testing, and deployment.",
					"Project kickoff, goal setting, and requirements.",
					"Design system development and prototyping.",
					"Simultaneous section development.",
					"Interactive features, animations, and Node API integration.",
					"Comprehensive testing, optimization, and deployment.",
				],
			},
			{
				icon: "fa-solid fa-box-open",
				header: "Dependencies",
				desc: [
					"Carefully selected dependencies to optimize UI performance and maintain control over design and functionality.",
					"Key dependencies include:",
				],
				list: [
					{ "body-parser": "Simplifying handling of HTTP request bodies in your Node.js backend." },
					{ dotenv: "Loading environment variables from a .env file for secure configuration." },
					{ express: "Building robust and scalable APIs for your Node.js backend." },
					{ nodemailer: "Facilitating email communication and integration in your Node.js application." },
				],
			},
			{
				icon: "fa-regular fa-hand-pointer",
				header: "Home Page - Cursor Animations",
				desc: [
					"Crafted a captivating home page that responds to cursor movements.",
					"Implemented subtle yet engaging hover effects for interactive elements.",
					"Enabled users to download your resume with a user-friendly functionality.",
					"Leveraged window event listeners to orchestrate cursor-based animations, providing a unique and immersive user experience.",
				],
			},
			{
				icon: "fa-solid fa-dna",
				header: "Career Page - Horizontal Timeline",
				desc: [
					"Developed a visually striking career page centered around a horizontal timeline.",
					"Users can smoothly scroll through your professional journey, providing a concise yet comprehensive overview of your career milestones.",
					"Utilized the GSAP library to create seamless horizontal scrolling animations, enhancing the storytelling aspect of this page.",
				],
			},
			{
				icon: "fa-solid fa-bullseye",
				header: "Skill Page - Interactive Bubbles",
				desc: [
					"Designed a skill showcase page featuring dynamic and interactive skill bubbles.",
					"Allowed users to freely interact with and drag skill bubbles across the screen.",
					"Implemented informative tooltips for in-depth skill exploration.",
					"Utilized the D3 library for creating visually appealing and data-rich skill representations, making it an engaging and informative section.",
				],
			},
			{
				icon: "fa-regular fa-address-card",
				header: "About Page - Detailed Profile",
				desc: [
					"Constructed a comprehensive 'About Me' page offering a deep dive into your background.",
					"Sections include your professional experience, educational achievements, personal interests and hobbies, notable accomplishments, and insights about your portfolio website.",
					"Designed a user-friendly folder tree structure for effortless navigation, with dynamic data rendering and the ability to explore your profile details in a structured manner.",
				],
			},
			{
				icon: "fa-solid fa-envelopes-bulk",
				header: "Contact Page - Seamless Communication",
				desc: [
					"Facilitated direct and convenient communication through the Contact Page.",
					"Equipped with comprehensive contact information, including various channels for connecting with you.",
					"Seamlessly integrated a mail feature using a Node API, ensuring a smooth and responsive user experience when reaching out.",
				],
			},
		],
	},
	back_library: {
		header: "Library",
		data: [
			{
				name: "Body-Parser",
				desc: "",
				url: "",
			},
			{
				name: "Dot Env",
				desc: "",
				url: "",
			},
			{
				name: "Express Js",
				desc: "",
				url: "",
			},
			{
				name: "Node Mailer",
				desc: "",
				url: "",
			},
		],
		about: "",
	},
	back_dirArchi: {
		img: "",
		info: [],
		about: "",
	},
	back_perform: {
		img: "",
		info: [],
		about: "",
	},
	depoly_workflow: {
		header: "Workflow",
		data: [
			{
				icon: "fa-brands fa-github",
				header: "Version Control with GitHub",
				desc: [
					"Develop your React front-end and Node.js back-end code locally.",
					"Use Git for version control.",
					"Create a GitHub repository to host your project.",
				],
			},
			{
				icon: "fa-solid fa-spinner",
				header: "Continuous Integration (CI) Pipeline",
				desc: [
					"Set up a CI pipeline using a service like GitHub Actions .",
					"Define CI configuration files to automate the build and test processes for both React and Node.js applications.",
					"Trigger CI builds on each commit or pull request to ensure code quality.",
				],
			},
			{
				icon: "fa-brands fa-docker",
				header: "Containerization with Docker",
				desc: [
					"Create Dockerfiles for both your React and Node.js applications.",
					"Build Docker images for each component, ensuring all dependencies are included.",
					"Push these images to a container registry (e.g., Docker Hub or GitHub Container Registry).",
				],
			},
			{
				icon: "fa-solid fa-bars-staggered",
				header: "Heroku for Staging Environment",
				desc: [
					"Create separate Heroku apps for staging and production environments.",
					"Set up Heroku pipelines to manage the deployment stages.",
					"Configure automatic deployments from your GitHub repository to the staging Heroku app whenever changes are pushed to a specific branch (e.g., main).",
				],
			},
			{
				icon: "fa-solid fa-bug",
				header: "Testing and Quality Assurance",
				desc: [
					"Implement testing suites for both front-end and back-end code.",
					"Run automated tests as part of your CI/CD pipeline to catch regressions early.",
				],
			},
			{
				icon: "fa-brands fa-product-hunt",
				header: "Heroku for Production Environment",
				desc: [
					"Configure automatic deployments to the production Heroku app upon successful staging tests or manually through a release process.",
					"Set environment variables for sensitive information (e.g., API keys, database credentials) securely in Heroku.",
				],
			},
			{
				icon: "fa-brands fa-google",
				header: "Domain Management with Google Domains",
				desc: [
					"Purchase a domain name or use an existing one from Google Domains.",
					"Set up DNS records to point to your Heroku production app's custom domain.",
				],
			},
		],
	},
};

module.exports = { folderData, aboutData };
