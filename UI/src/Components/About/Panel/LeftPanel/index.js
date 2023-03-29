import React, { useState, useEffect } from "react";
import allActions from "../../../../actions";
import { useSelector, useDispatch } from "react-redux";

import Folder from "./Folder";
import "./leftPanel.css";

function LeftPanel(props) {
  const [FolderData, setFolderData] = useState({});

  const selectedFolder = useSelector((state) => state.folderIs);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(`/api/about/folders`);
      response = await response.json();
      console.log(response);
      setFolderData(response.folders);
      folderSelected(response.defaultSelected);
    }
    return () => fetchMyAPI();
  }, []);

  const folderSelected = (data) => {
    if (data.value !== selectedFolder.value) {
      props.selectFolder(data);
      dispatch(allActions.folderAction(data));
    }
  };

  const showNode = (data) => {};
  return (
    <div>
      {FolderData.Mrinal && (
        <Folder
          explorer={FolderData.Mrinal}
          selectedFolder={selectedFolder}
          folderSelected={folderSelected}
        />
      )}
      {FolderData.Website && (
        <Folder
          explorer={FolderData.Website}
          selectedFolder={selectedFolder}
          folderSelected={folderSelected}
        />
      )}
    </div>
  );
}

export default LeftPanel;
