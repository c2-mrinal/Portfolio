import React from "react";
import Button from "../../Shared/Button";
import "./intro.css";
import Nav from "react-bootstrap/Nav";

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
    <div>
      <div className="backgroundImage">
        <div className="downloadResumeButton">
          <Button
            className="btn btn-secondary"
            name="Download Resume"
            onClick={downloadResume}
          />
        </div>
      </div>
      <div className="intoSection">
        <div className="careerbg">
          <h3>
            <Nav.Link href="/career">Career</Nav.Link>
          </h3>
        </div>
      </div>
      <div className="intoSection">
        <div className="skillbg">
          <h3>
            <Nav.Link href="/skill">Skills</Nav.Link>
          </h3>
        </div>
      </div>
      <div className="intoSection">
        <div className="aboutbg">
          <h3>
            <Nav.Link href="/about">About</Nav.Link>
          </h3>
        </div>
      </div>
      <div className="intoSection">
        <div className="contactbg">
          <h3>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Intro;
