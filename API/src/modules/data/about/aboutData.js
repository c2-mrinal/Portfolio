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
      [
        "College",
        "Dhirubhai Ambani Institute of Information and Communication Technology",
      ],
      ["Degree", "Masters of Science"],
      ["Specialization", "IT"],
      ["Location", "Gandhinagar"],
    ],
    url: "https://www.daiict.ac.in/",
    about: "",
    projects: [
      {
        name: "The KabdaiWala ",
        stackUsed: {
          html5: "fa-brands fa-html5",
          css3: "fa-brands fa-css3-alt",
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
        stackUsed: {
          html5: "fa-brands fa-html5",
          css3: "fa-brands fa-css3-alt",
          bootstrap: "fa-brands fa-bootstrap",
          javaScript: "fa-brands fa-square-js",
          chartJS: "fa-solid fa-chart-simple",
        },
        description: `It includes all of the required trading instruments and data for stock trading. We were able to access data using various APIs to have it under one roof. Currency converter, trading news, live trading info, and several other features areavailable.`,
        url: "",
      },
      {
        name: "Rating & Review",
        stackUsed: {
          html5: "fa-brands fa-html5",
          css3: "fa-brands fa-css3-alt",
          bootstrap: "fa-brands fa-bootstrap",
          javaScript: "fa-brands fa-square-js",
          chartJS: "fa-solid fa-chart-simple",
        },
        description: `It rates and reviews a wide range of entertainment material (like Movies, Games, Tv series, Songs, and more). It like IMDB and Metrics, assigns a ranking based on user input.`,
        url: "",
      },
      {
        name: "Urban clap",
        stackUsed: {
          html5: "fa-brands fa-html5",
          css3: "fa-brands fa-css3-alt",
          bootstrap: "fa-brands fa-bootstrap",
          javaScript: "fa-brands fa-square-js",
          chartJS: "fa-solid fa-chart-simple",
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
      ["Degree", "BCA"],
      ["Specialization", "Computer Application"],
      ["Location", "Ranchi"],
    ],
    url: "https://www.bitmesra.ac.in/",
    about: "",
    projects: [
      {
        name: "JHARKHAND TOURISM",
        stackUsed: {
          html5: "fa-brands fa-html5",
          css3: "fa-brands fa-css3-alt",
          bootstrap: "fa-brands fa-bootstrap",
          javaScript: "fa-brands fa-square-js",
          chartJS: "fa-solid fa-chart-simple",
        },
        description: `It was a static page for better User Interaction . It provide winsome glimpse of jharkhand , for attracting more tourism to Jharkhand.`,
        url: "",
      },
      {
        name: "REAL TIME WEATHER",
        stackUsed: {
          html5: "fa-brands fa-html5",
          css3: "fa-brands fa-css3-alt",
          JavaScript: "fa-brands fa-square-js",
          "Rest API": "fa-solid fa-gear",
        },
        description: `The site shows current weather conditions in all cities around the world in real-time. It also compares functionality between cities using an extremely simple graphical user interface. It uses an open REST API to provide details.`,
        url: "",
      },
      {
        name: "SPORT ADDA",
        stackUsed: {
          ".net": "fa-brands fa-microsoft",
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
    img: "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/images/logo-sri-chaitanya.png",
    info: [
      ["School", " Sri Chaitanya techno School"],
      ["Qualification", " Intermediate "],
      [
        "Specialization",
        "Phyics, Chemistry, Mathematics, English, Physical Education",
      ],
      ["Location", "Vishakapatnam - AP"],
    ],
    url: "https://srichaitanyaschool.net/",
    about: "",
  },
  matriculation: {
    img: "http://sunflowerschool.in/images/sunflower.jpg",
    info: [
      ["School", " Sun Flower Public School"],
      ["Qualification", " Intermediate "],
      [
        "Specialization",
        "Mathematics, Science, Social Science, English, Sanskrit",
      ],
      ["Location", "Begusarai - BR"],
    ],
    url: "http://sunflowerschool.in/",
    about: "",
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
    skills:
      "ReactJS:, JavaScript · Debugging · Node.js · Bootstrap · Agile Development · API Development · Front-End Development · Agile Software Development · Learning · Software Development",
    about: `Working as a ReactJS and NodeJS Developer on the product IOT Connect, where they
    demonstrate IOT device connectivity and various functionalities to perform on them ( devices
    like edge , gateway, sphere and more)
    My role is to handle bug fixes and update the UI as needed for the story. And manage the
    entire AWS and Azure Instance deployment process.`,
    activity: [],
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
    skills:
      "React.js · Redux.js · Debugging · Bootstrap · Agile Development · Webpack · Front-End Development · Agile Software Development · Chart.js · Learning · Software Development · Methodology",
    about: `QMetry is a product-based firm that sells numerous test management products (QTM ,
      QTM4J, and QAS). As a react developer, I was given the opportunity to join the QTM4J UI
      team. QTM4J is an Atlassian Jira integration for test management and exploratory testing.
      My responsibilities as a UI developer include improving the code base, troubleshooting the
      product for any tickets that are produced, adding new features to the product, and working
      on a chrome extension for exploratory testing. And, I received a pat on the
      back for successfully completing a sprint without a problem`,
    activity: [],
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
    skills:
      "React.js · Redux.js · Debugging · Bootstrap · Agile Development · Webpack · Front-End Development · Agile Software Development · Chart.js · Learning · Software Development · Methodology",
    about: `MagentaBI is a business intelligence startup that focuses on SMEs. It also provides visual data
    analysis from tabular data (excel, tally, databases, and more).
    At Magenta, I had the pleasure of working as a react js developer, where I created a variety of
    UI pages and updated the code base of many components. To improve the development of
    each UI component.`,
    activity: [],
  },
  daiict: {
    img: "",
    info: [],
    about: "",
  },
  hobbie: {
    img: "",
    info: [],
    about: "",
  },
  achive: {
    img: "",
    info: [],
    about: "",
  },
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
