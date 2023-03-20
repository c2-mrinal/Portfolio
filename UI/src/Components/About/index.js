import React, { useState } from "react";
import "./about.css";
import LeftPanel from "./Panel/LeftPanel";
import RightPanel from "./Panel/RightPanel";

function About() {
  const [selectedFolder, setSelectedFolder] = useState("Masters");

  return (
    <div className="about-cointainer">
      <div class="splitLeft ">
        <LeftPanel selectFolder={setSelectedFolder} />
      </div>

      <div class="splitRight">
        <RightPanel selectedFolder={selectedFolder} />
      </div>
    </div>
  );
}

export default About;
