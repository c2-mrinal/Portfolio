import React from "react";

export default function Educational(props) {
  return (
    <div>
      <div className="card">
        <div className="card-header row">
        <div className="col-xs-3 col-md-3">
          <img src={props.data?.img} height="150" width="150" alt="" />
    </div>
          <div className="col-xs-9 col-md-9">
            {props.data &&
              props.data.info?.map((info) => {
                return (
                  <span
                    className="infoTextBox"
                    onClick={() => props.showDetails(info[1])}
                    key={info[1]}
                  >
                    <strong>{info[0]} </strong>
                  </span>
                );
              })}
            {props.showDetail ? (
              <div className="detailsStyled"> {props.showDetail}</div>
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
