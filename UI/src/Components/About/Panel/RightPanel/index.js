import React, { useState, useEffect } from "react";
import "./rightPanel.css";

function RightPanel(props) {
  const folderIs = props.selectedFolder;
  const [data, setdata] = useState({});
  const [showDetail, setShowDetail] = useState("");

  useEffect(() => {
    const data = {
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
    return () => {
      setdata(data);
    };
  }, props);

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
            {data[folderIs] &&
              data[folderIs].info &&
              data[folderIs]?.info.map((info) => {
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
