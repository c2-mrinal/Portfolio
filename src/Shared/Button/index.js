import React from "react";
import "./button.css";

function Button(props) {
  return (
    <div>
      <button type="button" className={props.className} onClick={props.onClick}>
        {props.name}
      </button>
    </div>
  );
}

export default Button;
