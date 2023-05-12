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
							name: "Work-Flow",
							value: "front_workflow",
							isFolder: false,
							category: 4,
							items: [],
						},
						{
							name: "Library",
							value: "front_library",
							isFolder: false,
							category: 5,
							items: [],
						},
						{
							name: "Directory Architecture",
							value: "front_dirArchi",
							category: 6,
							isFolder: false,
							items: [],
						},
						{
							name: "Performance",
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
							name: "Work-Flow",
							value: "back_workflow",
							isFolder: false,
							category: 4,
							items: [],
						},
						{
							name: "Library",
							value: "back_library",
							isFolder: false,
							category: 5,
							items: [],
						},
						{
							name: "Directory Architecture",
							value: "back_dirArchi",
							category: 6,
							isFolder: false,
							items: [],
						},
						{
							name: "Performance",
							value: "back_perform",
							category: 7,
							isFolder: false,
							items: [],
						},
					],
				},
			],
		},
	},
	defaultSelected: {
		name: "Softweb Solutions",
		isFolder: false,
		value: "softwebSolutions",
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
		degreeImg: "https://portfolio--image.s3.eu-north-1.amazonaws.com/About/Educational/MSc.png",
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
		degreeImg: "https://portfolio--image.s3.eu-north-1.amazonaws.com/About/Educational/BCA.png",
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
		img: "https://portfolio--image.s3.eu-north-1.amazonaws.com/About/Educational/ShreeChaitanya.png",
		info: [
			["School", " Sri Chaitanya techno School"],
			["Qualification", " Intermediate "],
			["Specialization", "Phyics, Chemistry, Mathematics, English, Physical Education"],
			["Location", "Vishakapatnam - AP"],
		],
		url: "https://srichaitanyaschool.net/",
		degreeImg: "https://portfolio--image.s3.eu-north-1.amazonaws.com/About/Educational/Intermediate.jpg",
		about:
			"During my time at Sri Chaitanya Techno School for my intermediate education, I had a memorable experience. The school provided a strong foundation in subjects such as Physics, Chemistry, Math, English, and Physical Education. The teachers were highly knowledgeable and dedicated, offering guidance and support to ensure our academic success. I actively participated in various extracurricular activities, such as sports and cultural events, which helped me develop teamwork and leadership skills. Sri Chaitanya Techno School played a pivotal role in shaping my academic growth and fostering a well-rounded personality. I am grateful for the valuable education and fond memories I gained during my high school years.",
		term: "2015 - 2013",
	},
	matriculation: {
		img: "https://portfolio--image.s3.eu-north-1.amazonaws.com/About/Educational/sunflowerSchool.jpeg",
		info: [
			["School", " Sun Flower Public School"],
			["Qualification", " Intermediate "],
			["Specialization", "Mathematics, Science, Social Science, English, Sanskrit"],
			["Location", "Begusarai - BR"],
		],
		url: "http://sunflowerschool.in/",
		degreeImg: "https://portfolio--image.s3.eu-north-1.amazonaws.com/About/Educational/maticulation.png",
		about:
			"During my time at Sunflower Public School, where I pursued my matriculation education under the CBSE board, I had a fulfilling academic journey. The school provided a well-rounded education, emphasizing not only on core subjects like Science, Math, English, Sanskrit, and Social Science but also promoting extracurricular activities. The dedicated faculty members were supportive and encouraged a conducive learning environment. Participating in various school events, competitions, and clubs enhanced my overall growth and development. Sunflower Public School played a significant role in shaping my educational foundation and fostering a love for learning that continues to drive me forward in my academic and personal pursuits.",
		term: "2011 - 2013",
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
				img: "https://portfolio--image.s3.eu-north-1.amazonaws.com/About/softwebSolutions/AEEE9DA7-264D-451B-B821-A166DA51.jpg",
				name: "SPL Winner 2022",
			},
			{
				img: "https://portfolio--image.s3.eu-north-1.amazonaws.com/About/softwebSolutions/PHOTO-2022-10-20-23-59-50.jpeg",
				name: "Team Lunch",
			},
			{
				img: "https://portfolio--image.s3.eu-north-1.amazonaws.com/About/softwebSolutions/IMG_9343.jpeg",
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
			{ img: "https://portfolio--image.s3.eu-north-1.amazonaws.com/About/qmetry/IMG_5780.jpeg", name: "Festival" },
			{ img: "https://portfolio--image.s3.eu-north-1.amazonaws.com/About/qmetry/Team_Lunch.jpeg", name: "Team Lunch" },
			{ img: "https://portfolio--image.s3.eu-north-1.amazonaws.com/About/qmetry/Gift.jpeg", name: "Parting Gift" },
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
				img: "https://portfolio--image.s3.eu-north-1.amazonaws.com/About/magenta/team+trip(1).jpeg",
				name: "Team Trip",
			},
			{
				img: "https://portfolio--image.s3.eu-north-1.amazonaws.com/About/magenta/Brain+storning.jpeg",
				name: "Brain Storming",
			},
			{ img: "https://portfolio--image.s3.eu-north-1.amazonaws.com/About/magenta/team+trip.jpeg", name: "Team Trip" },
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
		notableWork: ["1", "2", "3"],
		about: `I created a single-page Web App utilizing Vue-Cli and NodeJS, with the entire application relying on an API for streamlined and reliable data handling. This project provided an opportunity to learn VueJs, a new technology, and develop APIs using JSON. Through this experience, I gained valuable knowledge in building dynamic web applications and honed my skills in working with VueJs and API development.`,
		activity: [
			{
				img: "https://portfolio--image.s3.eu-north-1.amazonaws.com/About/daiict/7E14067E-A3D3-4BA7-9F2D-D30A268E3C8F_1_201_a.jpeg",
				name: "Fest",
			},
			{
				img: "https://portfolio--image.s3.eu-north-1.amazonaws.com/About/daiict/7B01BF3D-FC46-4563-9B46-E82DA0C2CA10_1_201_a.jpeg",
				name: "Garba",
			},
			{
				img: "https://portfolio--image.s3.eu-north-1.amazonaws.com/About/daiict/28434664-447D-484B-87FA-A1705F9FAE50_1_201_a.jpeg",
				name: "Learing",
			},
		],
	},
	hobbie: [
		{
			section: "Sports",
			expire: "",
			content: [
				{
					img: "https://portfolio--image.s3.eu-north-1.amazonaws.com/About/Hobbies/7613E935-4392-4E89-8936-2D8313479C6C_1_201_a.jpeg",
					header: "Cricket",
					desc: "Passionately swinging bats, chasing boundaries, fielding with precision—cricket ignites my spirit, connecting me to camaraderie, skill, and sheer exhilaration.",
				},
				{
					img: "https://portfolio--image.s3.eu-north-1.amazonaws.com/About/Hobbies/CE397531-1934-4053-8536-F218AC2335AB_1_201_a.jpeg",
					header: "Cricket",
					desc: "Passionately swinging bats, chasing boundaries, fielding with precision—cricket ignites my spirit, connecting me to camaraderie, skill, and sheer exhilaration.",
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
					img: "https://portfolio--image.s3.eu-north-1.amazonaws.com/About/Achievments/Pat_on_back.png",
					desc: "Qmetry",
				},
			],
		},
		{
			section: "Problem Solving (Basic)",
			expire: "",
			content: [
				{
					img: "https://portfolio--image.s3.eu-north-1.amazonaws.com/About/Achievments/Problem_solving_basics.png",
					desc: "Hacker Rank ",
				},
			],
		},
		{
			section: "JavaScript (Basic)",
			expire: "",
			content: [
				{
					img: "https://portfolio--image.s3.eu-north-1.amazonaws.com/About/Achievments/Javascript_basics.png",
					desc: "Hacker Rank ",
				},
			],
		},
	],
	front_workflow: {
		img: "",
		info: [],
		about: "",
	},
	front_library: {
		img: "",
		info: [],
		about: "",
	},
	front_dirArchi: {
		img: "",
		info: [],
		about: "",
	},
	front_perform: {
		img: "",
		info: [],
		about: "",
	},
	back_workflow: {
		img: "",
		info: [],
		about: "",
	},
	back_library: {
		img: "",
		info: [],
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
};

module.exports = { folderData, aboutData };
