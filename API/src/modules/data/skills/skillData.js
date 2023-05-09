const skillData = [
	{
		value: 4.5,
		type: "a",
		label: "Javascript",
		icon: "fa-brands fa-js fa-shake",
		experience: "July, 2018",
		description: `With 2.4 years of industry experience, I have been working with JavaScript since 2018 and have a proficiency rating of 4.5 out of 5. I am familiar with ES6+ features and have a strong understanding of core vanilla JavaScript. My experience has been focused on front-end web development using popular frameworks like ReactJs and VueJs, and I have implemented vanilla JavaScript to achieve desired functionality. This has enriched my skills essential in the field of web development.`,
	},
	{
		value: 4,
		type: "a",
		label: "TypeScript",
		icon: "fa-brands fa-js fa-shake",
		experience: "01/03/2019",
		description:
			"I have worked with TypeScript in conjunction with ReactJS on a live project. This has enabled me to develop scalable and maintainable applications with ease. TypeScript's static type-checking feature has helped me catch errors early on, leading to a higher quality of code. Overall, my experience with TypeScript and ReactJS has been enriching, and I look forward to utilizing these technologies in future projects.",
	},
	{
		value: 4.5,
		type: "a",
		label: "ReactJS",
		icon: "fa-brands fa-react fa-spin",
		experience: "Jan, 2021",
		description:
			"With 2.4 years of experience working on live applications, I have a thorough grasp of ReactJS's functional and class components. I am knowledgeable in lifecycle methods, which are critical for managing component states and optimising performance. My expertise has also sharpened my debugging abilities, which have been useful in resolving issues and boosting programme quality. Overall, my experience with ReactJS has been positive, and I am excited to continue working with this powerful technology.",
	},
	{
		value: 4,
		type: "a",
		label: "ReduxJS",
		icon: "fa-brands fa-react fa-spin",
		experience: "Jan, 2021",
		description:
			"I have experience using Redux.js for state management in web applications, including working with the Redux store and utilizing React hooks such as useSelector and useDispatch. I have implemented Redux middleware for logging and API calls, as well as using the combineReducers function for modularizing the state in the store. Overall, my experience with Redux.js has been invaluable in developing complex and scalable web applications with robust state management.",
	},
	{
		value: 5,
		type: "a",
		label: "CSS3",
		icon: "fa-brands fa-css3-alt fa-flip",
		experience: "June, 2018",
		description:
			"Since my first webpage project in 2018, I've been using CSS as a style tool. Strong knowledge of CSS and related libraries such as Bootstrap, scss, and others for adding colors, layout, fonts, responsiveness, and animation.",
	},
	{
		value: 5,
		type: "a",
		label: "HTML5",
		icon: "fa-brands fa-html5 fa-flip",
		experience: "June, 2018",
		description:
			"I have been working with HTML5 since 2018 and have gained significant experience in the language. My experience has primarily been focused on front-end web development, where I have used HTML to create web pages and HTML5 to add more advanced features such as video and audio playback. Overall, my experience with these technologies has been rewarding, and I am confident in my ability to use them to create dynamic and engaging web applications.",
	},
	{
		value: 4,
		type: "c",
		label: "Jquery",
		icon: "fa-solid fa-clipboard-question fa-shake",
		experience: "June, 2018",
		description:
			"I've worked with jQuery, a popular JavaScript library that makes DOM manipulation and event handling easier. My experience using jQuery has allowed me to increase cross-browser compatibility, optimise development processes, and minimise code verbosity. I've used jQuery to create dynamic and interactive online apps, and I'm excited to keep using this powerful technology in future projects.",
	},
	{
		value: 3.5,
		type: "b",
		label: "NodeJs",
		icon: "fa-brands fa-node fa-beat-fade",
		experience: "Sept, 2022",
		description:
			"I've been working with NodeJS for a year and have earned substantial server-side development knowledge. My experience has been on the usage of NodeJS to build scalable and efficient systems with an emphasis on real-time communication. I've used NodeJS and expressJS to create RESTful APIs and web servers. I've used jQuery to create dynamic and interactive online apps, and I'm excited to keep using this powerful technology in future projects.",
	},
	{
		value: 3.5,
		type: "b",
		label: "ExpressJS",
		icon: "fa-brands fa-square-js fa-shake",
		experience: "Sept, 2022",
		description:
			"I've worked with ExpressJS, a popular NodeJS framework that makes it easier to create online apps. My experience with ExpressJS has allowed me to swiftly build RESTful APIs, web servers, and other applications. ExpressJS has been used to create scalable and efficient systems with a focus on real-time communication. Overall, my experience with ExpressJS and NodeJS has been beneficial, and I look forward to incorporating these technologies into future projects.",
	},
	{
		value: 3,
		type: "b",
		label: "VueJS",
		icon: "fa-brands fa-vuejs fa-beat",
		description:
			"I got the opportunity to work with Vue.js, a popular JavaScript framework for creating user interfaces, during my internship. My knowledge of Vue.js enables me to easily construct dynamic and responsive web apps. Vue.js has been used to create scalable and efficient apps with an emphasis on front-end development. ",
	},
	{
		value: 3,
		type: "b",
		label: "C++",
		icon: "fa-solid fa-file-binary",
		description:
			"I have experience using C++ for data structures and algorithms, as well as for gaining a deeper understanding of object-oriented programming concepts. I have utilized C++ to implement complex algorithms and data structures, as well as to create efficient and modular software solutions. ",
	},
	{
		value: 3.5,
		type: "b",
		label: "Algo DS",
		icon: "fa-sharp fa-regular fa-file-code fa-fade",
		description:
			"I have a strong background in data structures and algorithms, which I have used to create efficient and scalable software solutions. I've worked on sorting, searching, and graph traversal algorithms, as well as data structures including arrays, linked lists, trees, and hash tables. I've also used algorithmic thinking and problem-solving abilities to improve code performance and detect and address application bottlenecks.",
	},
	{
		value: 3.5,
		type: "b",
		label: "SQL",
		icon: "fa-solid fa-database fa-bounce",
		description:
			"I have experience working with SQL and SQL Alchemy, a popular Python-based SQL toolkit. I have utilized these technologies to create and manage databases, write complex SQL queries, and integrate database functionality into Python applications. My experience with SQL and SQL Alchemy has been essential in developing robust and scalable software solutions.",
	},
	{
		value: 4,
		type: "b",
		label: "GIT",
		icon: "fa-brands fa-git-alt fa-beat",
		experience: "Feb, 2020",
		description:
			"I have extensive experience using Git version control systems such as GitHub, GitLab, and Bitbucket. I have used Git to manage code repositories, collaborate with other developers, and maintain version control of my projects. My experience with Git has enabled me to effectively manage code changes, create and merge branches, and resolve conflicts. I have also utilized Git workflows such as GitFlow and have experience with Continuous Integration and Continuous Deployment (CI/CD) pipelines.",
	},
	{
		value: 4.5,
		type: "b",
		label: "VS Code",
		icon: "fa-solid fa-code fa-beat-fade",
		experience: "Jan, 2019",
		description:
			"I have been using Visual Studio Code since 2019. I have a lot of hands-on experience with its extensions like Docker, Git, Lint, and more, which has enabled me to streamline my workflow and optimize my development process. Overall, my experience with Visual Studio Code has been enriching and has allowed me to improve my productivity as a developer.",
	},
	{
		value: 4,
		type: "b",
		label: "Bootstrap",
		icon: "fa-brands fa-bootstrap fa-beat-fade",
		experience: "Jan, 2019",
		description:
			"I have vast expertise creating responsive and mobile-friendly websites using Bootstrap in combination with CSS and SCSS. Because of my knowledge with Bootstrap, I can quickly develop aesthetically beautiful and usable user interfaces. To design aesthetically appealing online apps that adapt fluidly to multiple screen sizes, I used Bootstrap's grid structure, CSS styles, and SCSS mixins. ",
	},
];

module.exports = { skillData };
