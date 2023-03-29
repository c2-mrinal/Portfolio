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
    projects: [],
  },
  bachlor: {
    img: "https://upload.wikimedia.org/wikipedia/en/d/d2/Birla_Institute_of_Technology_Mesra.png",
    info: [
      ["College", "BIT, Mesra"],
      ["Degree", "BCA"],
      ["Specialization", "Computer Application"],
      ["Location", "Ranchi"],
    ],
    url: "https://www.bitmesra.ac.in/",
    about: "",
    projects: [
      { name: "kabadiwala", stackUsed: [], description: "", url: "" },
      { name: "kabadiwala", stackUsed: [], description: "", url: "" },
      { name: "kabadiwala", stackUsed: [], description: "", url: "" },
      { name: "kabadiwala", stackUsed: [], description: "", url: "" },
    ],
  },
  intermediate: {
    img: "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/images/logo-sri-chaitanya.png",
    info: [
      ["School", " Sri Chaitanya"],
      ["Qualification", " Intermediate "],
      ["Specialization", "Phyics, Chm, Math"],
      ["Location", "Vizag"],
    ],
    url: "https://srichaitanyaschool.net/",
    about: "",
  },
  matriculation: {
    img: "http://sunflowerschool.in/images/sunflower.jpg",
    info: [
      ["School", " Sun Flower Public School"],
      ["Qualification", " Intermediate "],
      ["Specialization", "Phyics, Chm, Math"],
      ["Location", "Vizag"],
    ],
    url: "http://sunflowerschool.in/",
    about: "",
  },
  softwebSolutions: {
    img: "",
    info: [],
    about: "",
  },
  qmetry: {
    img: "",
    info: [],
    about: "",
  },
  magentaBI: {
    img: "",
    info: [],
    about: "",
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
