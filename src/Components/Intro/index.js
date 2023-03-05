import React from "react";
import Button from "../../Shared/Button";
import "./intro.css";

function Intro() {
  const downloadResume = () => {
    // fetch("SamplePDF.pdf").then((response) => {
    //   response.blob().then((blob) => {
    //     const fileURL = window.URL.createObjectURL(blob);
    let alink = document.createElement("a");
    alink.href = "../../image/MrinalKasyapResume.pdf";
    alink.download = "SamplePDF.pdf";
    alink.click();
    //   });
    // });
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
