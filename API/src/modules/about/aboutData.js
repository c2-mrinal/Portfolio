const folderData = {
  Mrinal: {
    name: "Mrinal",
    isFolder: true,
    isOpen: true,
    data: [],
    items: [
      {
        name: "Eductional",
        isFolder: true,
        isOpen: true,
        items: [
          {
            name: "Masters",
            isFolder: false,
            items: [],
          },
          {
            name: "Bachlors",
            isFolder: false,
            items: [],
          },
          {
            name: "Intermediate",
            isFolder: false,
            items: [],
          },
          {
            name: "Matriculation",
            isFolder: false,
            items: [],
          },
        ],
      },
      {
        name: "Experince",
        isFolder: true,
        items: [
          {
            name: "Softweb Solutions",
            isFolder: false,
            items: [],
          },
          {
            name: "Qmetry",
            isFolder: false,
            items: [],
          },
          {
            name: "MagentaBi",
            isFolder: false,
            items: [],
          },
          {
            name: "DAIICT",
            isFolder: false,
            items: [],
          },
        ],
      },
      {
        name: "Hobbies",
        isFolder: false,
        items: [],
      },
      {
        name: "Achievments",
        isFolder: false,
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
            name: "Data",
            isFolder: true,
            items: [
              {
                name: "folderData.js",
                isFolder: false,
                items: [],
              },
            ],
          },
          {
            name: "index.html",
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
            name: "components",
            isFolder: true,
            items: [
              {
                name: "Folder.js",
                isFolder: false,
                items: [],
              },
            ],
          },
          {
            name: "App.js",
            isFolder: false,
            items: [],
          },
          {
            name: "index.js",
            isFolder: false,
            items: [],
          },
          {
            name: "styles.css",
            isFolder: false,
            items: [],
          },
        ],
      },
    ],
  },
};

const aboutData = {
  Masters: {
    img: "",
    info: [
      [
        "College",
        "Dhirubhai Ambani Institute of Information and Communication Technology",
      ],
      ["Degree", "Masters of Science"],
      ["Specialization", "IT"],
      ["Location", "Gandhinagar"],
    ],
    about: "",
    projects: [],
  },
  Bachlors: {
    img: "",
    info: [
      ["College", "BIT, Mesra"],
      ["Degree", "BCA"],
      ["Specialization", "Computer Application"],
      ["Location", "Ranchi"],
    ],
    about: "",
    projects: [
      { name: "kabadiwala", stackUsed: [], description: "", url: "" },
      { name: "kabadiwala", stackUsed: [], description: "", url: "" },
      { name: "kabadiwala", stackUsed: [], description: "", url: "" },
      { name: "kabadiwala", stackUsed: [], description: "", url: "" },
    ],
  },
  Intermediate: {
    img: "",
    info: [
      ["School", " Sri Chaitanya"],
      ["Qualification", " Intermediate "],
      ["Specialization", "Phyics, Chm, Math"],
      ["Location", "Vizag"],
    ],
    about: "",
  },
  Matriculation: {
    img: "",
    info: [
      ["School", " Sun Flower Public School"],
      ["Qualification", " Intermediate "],
      ["Specialization", "Phyics, Chm, Math"],
      ["Location", "Vizag"],
    ],
    about: "",
  },
};

module.exports = { folderData, aboutData };
