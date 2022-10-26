import React, { useState } from "react";
import ring from "../../image/ring.png";
import c2Icon from "../../image/c2Icon.png";
import "./contact.css";
import MailPopUp from "./MailPopUp";

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
                <a href={""}>
                  <span className="contactIcon">
                    <i className="fa fa-brands fa-3x fa-linkedin"></i>
                  </span>
                </a>
                <a href={""}>
                  <span className="contactIcon">
                    <i className="fa fa-brands fa-3x fa-twitter"></i>
                  </span>{" "}
                </a>
                <a href={""}>
                  <span className="contactIcon">
                    <i className="fa fa-brands fa-3x fa-instagram"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contactBG">
        <div className="contactBox">ind</div>
      </div>
      <MailPopUp show={DisplayMailPopup} hide={handleMailPopup} />
    </div>
  );
}

export default Contact;
