import React from "react";
import Button from "../../Shared/Button";
import "./intro.css";
import invertedArrowPointing from "../../image/invertedArrowPointing.gif";
import backgroundMain from "../../image/backgroundMain.mp4";
import Nav from "react-bootstrap/Nav";

function Intro(props) {
  const downloadResume = async () => {
    const response = await fetch("/api/resume");
    let data = await response.json();
    let alink = document.createElement("a");
    alink.href = data.url;
    alink.click();
  };
  return (
    <div>
      <div className="myVideo">
        <video autoPlay muted loop width="100%" height="100%">
          <source src={backgroundMain} type="video/mp4" />
        </video>
      </div>
      <section className=" intoSection">
        <div className="resumeDownloadContainer">
          <Button
            className="btn btn-secondary downloadResumeButton"
            name="Resume"
            onClick={downloadResume}
            icon={"fa-1x fa fa-download"}
          />
          <img
            src={invertedArrowPointing}
            className="pointingArrow"
            alt="error"
          />
        </div>
        {/* <div className="downloadResumeButton"> */}
        <div className="intoDesciption">
          <h1>Hello !</h1>
          <h1> I am Mrinal Kasyap</h1>
          <h1> JavaScript Developer</h1>
          <h1> Developing the change U I need ...</h1>
        </div>

        {/* </div> */}
      </section>
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
