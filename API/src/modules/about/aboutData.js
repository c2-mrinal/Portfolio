const folderData = {
  folders: {
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
          name: "Experince",
          isFolder: true,
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
  defaultSelected: "Qmetry",
};

const aboutData = {
  master: {
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
  bachlor: {
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
  intermediate: {
    img: "",
    info: [
      ["School", " Sri Chaitanya"],
      ["Qualification", " Intermediate "],
      ["Specialization", "Phyics, Chm, Math"],
      ["Location", "Vizag"],
    ],
    about: "",
  },
  matriculation: {
    img: "",
    info: [
      ["School", " Sun Flower Public School"],
      ["Qualification", " Intermediate "],
      ["Specialization", "Phyics, Chm, Math"],
      ["Location", "Vizag"],
    ],
    about: "",
  },
  matriculation: {
    img: "",
    info: [],
    about: "",
  },
  matriculation: {
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
