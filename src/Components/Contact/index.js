import React, { useState } from "react";
import "./contact.css";
import MailPopUp from "./MailPopUp";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faLinkedinIn,
//   faInstagram,
//   faTwitter,
//   faGithub,
// } from "@fortawesome/free-solid-svg-brands";

function Contact() {
  const [DisplayMailPopup, setDisplayMailPopup] = useState(false);
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
                <a
                  href={"https://www.linkedin.com/in/mrinal-kasyap-695853171/"}
                  target="_blank"
                >
                  <span className="contactIcon">
                    <i class="fa-3x fa-brands fa-linkedin-in"></i>
                  </span>
                </a>
                <a href={""} target="_blank">
                  <span className="contactIcon">
                    <i class="fa-3x fa-brands fa-twitter"></i>
                  </span>{" "}
                </a>
                <a href={""} target="_blank">
                  <span className="contactIcon">
                    <i class="fa-3x fa-brands fa-instagram"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contactBG">
        <div className="contactBox">
          <div className="contactBoxContent d-flex justify-content-around">
            <div>
              <a href={"https://github.com/c2-mrinal"} target="_blank">
                <span className="contactIcon">
                  <i class=" fa-3x fa-brands fa-github"></i>
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
                  <i className="fa  fa-3x fa-brands fa-hackerrank"></i>
                </span>
              </a>
              <a href={""}>
                <span className="contactIcon">
                  <i className="fa  fa-3x fa-brands fa-codepen"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <MailPopUp show={DisplayMailPopup} hide={handleMailPopup} />
    </div>
  );
}

export default Contact;
