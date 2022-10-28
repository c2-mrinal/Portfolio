import React, { useState, useEffect } from "react";
import "./leftPanel.css";

function LeftPanel() {
  const [FolderData, setFolderData] = useState([]);

  useEffect(() => {
    const DummyFolder = [
      {
        name: "f1",
        level: 0,
        children: [
          { name: "f1c1", level: 1, children: [] },
          { name: "f1c2", level: 1, children: [] },
        ],
      },
      {
        name: "f2",
        level: 0,
        children: [
          {
            name: "f2c1",
            level: 1,
            children: [{ name: "f2c1", level: 2, children: [] }],
          },
        ],
      },
      {
        name: "f3",
        level: 0,
        children: [{ name: "f3c1", level: 1, children: [] }],
      },
    ];

    setFolderData(DummyFolder);
    return () => {};
  }, []);

  const showRoot = (data) => {};

  const showNode = (data) => {};

  return <div></div>;
}

export default LeftPanel;
