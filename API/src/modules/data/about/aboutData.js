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
							name: "MagentaBi",
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
		degreeImg: "https://drive.google.com/uc?export=view&id=18l920vtFCnuexA37Fhl-gxJ-5DPnPs0j",
		about: "Yet to be Updated",
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
		degreeImg: "https://drive.google.com/uc?export=view&id=1CF3e1LbDSFBrm48Fe8fz9k6ZinerNQps",
		about: "Yet to be Updated",
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
		img: "https://drive.google.com/uc?export=view&id=1_gj_x8xsIAqRgkKl9VdhaQfqmhXXhzIU",
		info: [
			["School", " Sri Chaitanya techno School"],
			["Qualification", " Intermediate "],
			["Specialization", "Phyics, Chemistry, Mathematics, English, Physical Education"],
			["Location", "Vishakapatnam - AP"],
		],
		url: "https://srichaitanyaschool.net/",
		degreeImg: "https://drive.google.com/uc?export=view&id=1IFKnpqcCg7kj_k0GFx01aoCqWDoltAmo",
		about: "Yet to be Updated",
		term: "2015 - 2013",
	},
	matriculation: {
		img: "https://drive.google.com/uc?export=view&id=1SvusXKkHuc5rlygeAUECqOrfGqfSisxT",
		info: [
			["School", " Sun Flower Public School"],
			["Qualification", " Intermediate "],
			["Specialization", "Mathematics, Science, Social Science, English, Sanskrit"],
			["Location", "Begusarai - BR"],
		],
		url: "http://sunflowerschool.in/",
		degreeImg: "https://drive.google.com/uc?export=view&id=16XNZknsgGIH76UTkaT6T3DKN23-l0cAW",
		about: "Yet to be Updated",
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
			"Node and Express Code Modifications",
			"New Device Authentication type created CA Signed Individual",
			"",
		],
		about: `Working as a ReactJS and NodeJS Developer on the product IOT Connect, where they
    demonstrate IOT device connectivity and various functionalities to perform on them (devices
    like edge , gateway, sphere and more)
    My role is to handle bug fixes and update the UI as needed for the story. And manage the
    entire AWS and Azure Instance deployment process.`,
		activity: [
			{ img: "https://drive.google.com/uc?export=view&id=10L8vFCF8cS1Pv_l5jtGB1iAP7GJQ44fz", name: "SPL Winner 2022" },
			{ img: "https://drive.google.com/uc?export=view&id=1de364rT-2bytwkaRwScltTE2yd4aBEXW", name: "Team Lunch" },
			{ img: "https://drive.google.com/uc?export=view&id=1zPalIPevwYHIcKEUKnEhW3_Eo3HqiHHg", name: "Festival" },
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
			SonarLint: "fa-solid fa-horizontal-rule",
			BackboneJS: "fa-regular fa-skull-crossbones",
			JIRA: "fa-brands fa-jira",
			"Chrome Extension": "fa-brands fa-chrome",
			"Agile Development": "fa-regular fa-circle",
			Webpack: "fa-regular fa-cube",
			ChartJS: "fa-solid fa-chart-simple",
		},
		notableWork: [
			"Chart Drill Down Report",
			"Virtualisiation of Html elements",
			"Chrome Extension Modification as per latest V8 engine manefist version",
		],
		about: `QMetry is a product-based firm that sells numerous test management products (QTM ,
      QTM4J, and QAS). As a react developer, I was given the opportunity to join the QTM4J UI
      team. QTM4J is an Atlassian Jira integration for test management and exploratory testing.
      My responsibilities as a UI developer include improving the code base, troubleshooting the
      product for any tickets that are produced, adding new features to the product, and working
      on a chrome extension for exploratory testing. And, I received a pat on the
      back for successfully completing a sprint without a problem`,
		activity: [
			{ img: "https://drive.google.com/uc?export=view&id=1ka8epI07mVydEqHdFAH5xwvGcFAGnK2_", name: "Festival" },
			{ img: "https://drive.google.com/uc?export=view&id=1kjOh8oI8T5aOyATf40JQ6oAtuh0IsAch", name: "Team Lunch" },
			{ img: "https://drive.google.com/uc?export=view&id=1wiuCui8I4VW4ATs9TJkhIANrYgf9zf0n", name: "Parting Gift" },
		],
	},
	magentaBI: {
		name: "Qmetry",
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
			{ img: "https://drive.google.com/uc?export=view&id=1L438k8NwkpxP02oiSCnxIKbTW4S5fQLA", name: "Team Trip" },
			{ img: "https://drive.google.com/uc?export=view&id=1abB3GIvNvTOHAlMSVWH91sMJISIalvyz", name: "Brain Storming" },
			{ img: "https://drive.google.com/uc?export=view&id=1KUx5LY_wBMuSZ2_l8Vv_OJCMULjHrrIk", name: "Team Trip" },
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
		about: `Developed a single-page Web-App using Vue-Cli and nodeJS.
		The whole web app was based on API which makes the data more streamlined and reliable.
		Learned a new technology VueJs. API devlopment using Json.`,
	},
	hobbie: [
		{
			section: "Sports",
			expire: "",
			content: [
				{
					img: "https://drive.google.com/uc?export=view&id=1V8P-tZj_r3v9fCU1-t0wECzIPVedvkLe",
					desc: "Qmetry",
				},
				{
					img: "https://drive.google.com/uc?export=view&id=1BluY-SJj4P_RdtEJj1fGRDoxX_mxiSGX",
					desc: "Hacker Rank ",
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
					img: "https://drive.google.com/uc?export=view&id=1V8P-tZj_r3v9fCU1-t0wECzIPVedvkLe",
					desc: "Qmetry",
				},
			],
		},
		{
			section: "Problem Solving (Basic)",
			expire: "",
			content: [
				{
					img: "https://drive.google.com/uc?export=view&id=1BluY-SJj4P_RdtEJj1fGRDoxX_mxiSGX",
					desc: "Hacker Rank ",
				},
			],
		},
		{
			section: "JavaScript (Basic)",
			expire: "",
			content: [
				{
					img: "https://drive.google.com/uc?export=view&id=1elQu0tj7Cc6LSFn9jpKs4SgZWBLougwr",
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
