import React from "react";
import "./timeline.css";

function Timeline() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              style={{
                display: "inlineBlock",
                width: "100%",
                height: "100vh",
                overflowY: "auto",
              }}
            >
              <ul className="timeline timeline-horizontal">
                <li className="timeline-item">
                  <div className="timeline-badge primary">
                    <i className="glyphicon glyphicon-check"> 2023</i>
                  </div>
                </li>
                <li className="timeline-item">
                  <div className="timeline-badge success">
                    <i className="glyphicon glyphicon-check">2022</i>
                  </div>
                </li>
                <li className="timeline-item">
                  <div className="timeline-badge info">
                    <i className="glyphicon glyphicon-check">2021</i>
                  </div>
                </li>
                <li className="timeline-item">
                  <div className="timeline-badge danger">
                    <i className="glyphicon glyphicon-check">2020</i>
                  </div>
                </li>
                <li className="timeline-item">
                  <div className="timeline-badge warning">
                    <i className="glyphicon glyphicon-check">2019</i>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
