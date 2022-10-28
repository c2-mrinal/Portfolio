import React, { useState } from "react";
import "./contact.css";
import MailPopUp from "./MailPopUp";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";

function Contact() {
  const [DisplayMailPopup, setDisplayMailPopup] = useState(false);
  console.log({ DisplayMailPopup });
  const handleMailPopup = () => {
    setDisplayMailPopup(!DisplayMailPopup);
  };
  return (
    <div className="contactContainer">
      <div className="contactBG">
        <div className="contactBox ">
          <div className="contactBoxContent d-flex justify-content-around">
            <div>
              <h2>Mail</h2>
              <div className="typewriter" onClick={handleMailPopup}>
                <h1>Type.</h1>
              </div>
            </div>
            <div>
              <h2>Social</h2>
              <div className="socialIcons d-flex justify-content-between">
                {/* <span className="expandedContactIcon">
                  <span className="contactIcon">
                  <i className="fa fa-brands fa-lg fa-linkedin"></i>
                  </span>
                  Linkedin
                </span> */}
                <a
                  href={"https://www.linkedin.com/in/mrinal-kasyap-695853171/"}
                  target="_blank"
                >
                  <span className="contactIcon">
                    <LinkedInIcon />
                  </span>
                </a>
                <a href={""} target="_blank">
                  <span className="contactIcon">
                    <TwitterIcon />
                  </span>{" "}
                </a>
                <a href={""} target="_blank">
                  <span className="contactIcon">
                    <InstagramIcon />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contactBG">
        <div className="contactBox">
          <a href={"https://github.com/c2-mrinal"} target="_blank">
            <span className="contactIcon">
              <GitHubIcon />
              <i className="fa  fa-3x fa-brands fa-github"></i>
            </span>
          </a>
          <a
            href={"https://stackoverflow.com/users/14725561/c2-mrinal"}
            target="_blank"
          >
            <span className="contactIcon">
              <i className="fa  fa-3x fa-brands fa-stack-overflow"></i>
            </span>
          </a>
          <a href={"https://www.hackerrank.com/mrinalspec"} target="_blank">
            <span className="contactIcon">
              <i className="fa  fa-brands fa-hackerrank"></i>
            </span>
          </a>
          <a href={""}>
            <span className="contactIcon">
              <i className="fa  fa-3x fa-brands fa-codepen"></i>
            </span>
          </a>
        </div>
      </div>
      <MailPopUp show={DisplayMailPopup} hide={handleMailPopup} />
    </div>
  );
}

export default Contact;
