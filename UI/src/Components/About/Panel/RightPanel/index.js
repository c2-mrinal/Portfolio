import React, { useState, useEffect } from "react";
import "./rightPanel.css";
import allActions from "../../../../actions";
import { useSelector, useDispatch } from "react-redux";

function RightPanel(props) {
  const [data, setdata] = useState({});
  const [showDetail, setShowDetail] = useState("");

  const dispatch = useDispatch();
  const folderIs = useSelector((state) => state.folderIs || "");
  const folderData = useSelector((state) => state.folderData || {});

  useEffect(() => {
    async function fetchMyAPI() {
      const value = folderIs.value;
      if (value && !folderData[value]) {
        let response = await fetch(`/api/about/details/${value}`);
        response = await response.json();
        setdata(response);
        storefolderDataUpdate(value, response);
      } else {
        setdata(folderData[value]);
      }
    }
    fetchMyAPI();
    showDetails(showDetail);
  }, [folderIs.value]);

  const storefolderDataUpdate = (key, data) => {
    dispatch(allActions.folderDataAction({ ...folderData, [key]: data }));
  };

  const showDetails = (value) => {
    if (value == showDetail) {
      setShowDetail("");
    } else {
      setShowDetail(value);
    }
  };

  return (
    <div>
      <div className="card">
        <div className="card-header row">
          <div className="col-xs-12 col-md-12">
            {data &&
              data.info?.map((info) => {
                return (
                  <span
                    className="infoTextBox"
                    onClick={() => showDetails(info[1])}
                    key={info[1]}
                  >
                    <strong>{info[0]} </strong>
                  </span>
                );
              })}
            {showDetail ? (
              <div className="detailsStyled"> {showDetail}</div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="card-body rightPanel">
          <div>
            <h5 className="card-title">About</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
          <div>
            <h5 className="card-title">Projects</h5>
            <ul>
              <li>Kabadiwala</li>
              {/* <li></li>
              <li></li>
              <li></li>
              <li></li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightPanel;
