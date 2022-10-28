import React from "react";
import "./about.css";
import LeftPanel from "./Panel/LeftPanel";
import RightPanel from "./Panel/RightPanel";

function About() {
  return (
    <div className="about-cointainer">
      <div class="splitLeft ">
        <LeftPanel />
      </div>

      <div class="splitRight">
        <RightPanel />
      </div>
    </div>
  );
}

export default About;
