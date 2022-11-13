import React, { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
function Folder({ explorer, selectedFolder, folderSelected }) {
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    if (explorer && explorer.isOpen) {
      setExpand(true);
    }
  }, false);

  const selectedAboutField = () => {
    setExpand(!expand);
    if (!explorer.isFolder) folderSelected(explorer.name);
  };
  console.log(explorer, selectedFolder, folderSelected);

  return (
    <div>
      <div
        className={`folderTreeExpandable ${
          selectedFolder == explorer.name ? "treeNodeSelected" : ""
        }`}
        onClick={selectedAboutField}
      >
        <span>
          {" "}
          {explorer.isFolder && (
            <>{expand ? <KeyboardArrowDownIcon /> : <ChevronRightIcon />}</>
          )}{" "}
        </span>
        <span>{explorer.name}</span>
      </div>

      <br />
      <div style={{ display: expand ? "block" : "none", paddingLeft: 15 }}>
        {explorer.items.map((explore) => (
          <Folder
            key={explore.name}
            explorer={explore}
            selectedFolder={selectedFolder}
            folderSelected={folderSelected}
          />
        ))}
      </div>
    </div>
  );
}

export default Folder;
