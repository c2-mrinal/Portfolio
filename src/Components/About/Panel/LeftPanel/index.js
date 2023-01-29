import React, { useState, useEffect } from "react";
import Folder from "./Folder";
import "./leftPanel.css";

function LeftPanel(props) {
  const [FolderData, setFolderData] = useState({});
  const [SelectedFolder, setSelectedFolder] = useState("Masters");

  useEffect(() => {
    const DummyFolder = {
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

    setFolderData(DummyFolder);
    return () => {};
  }, []);

  const folderSelected = (data) => {
    if (data !== SelectedFolder) {
      setSelectedFolder(data);
      props.selectFolder(data);
    }
  };

  const showNode = (data) => {};
  return (
    <div>
      {FolderData.Mrinal && (
        <Folder
          explorer={FolderData.Mrinal}
          selectedFolder={SelectedFolder}
          folderSelected={folderSelected}
        />
      )}
      {FolderData.Website && (
        <Folder
          explorer={FolderData.Website}
          selectedFolder={SelectedFolder}
          folderSelected={folderSelected}
        />
      )}
    </div>
  );
}

export default LeftPanel;
