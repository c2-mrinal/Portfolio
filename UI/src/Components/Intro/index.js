import React from "react";
import Button from "../../Shared/Button";
import "./intro.css";

function Intro() {
  const downloadResume = async () => {
    const response = await fetch("/api/resume");
    let data = await response.json();
    let alink = document.createElement("a");
    alink.href = data.url;
    alink.click();
  };
  return (
    <div className="backgroundImage">
      <div className="downloadResumeButton">
        <Button
          className="btn btn-secondary"
          name="Download Resume"
          onClick={downloadResume}
        />
      </div>
    </div>
  );
}

export default Intro;
