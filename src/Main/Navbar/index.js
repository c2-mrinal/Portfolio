import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <ul>
      <li>
        <Link to="/" className="active">
          Introduction
        </Link>
      </li>
      <li>
        <Link to="/career">Career</Link>
      </li>
      <li>
        <Link to="/skill">Skills</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
}

export default Navbar;
