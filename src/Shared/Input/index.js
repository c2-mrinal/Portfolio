import React from "react";
import "./input.css";

function Input(props) {
  return (
    <div>
      <div className="form__group field">
        <input
          type={props.type || "text"}
          className="form__field"
          placeholder={props.name || ""}
          name={props.name}
          id={props.id}
          value={props.value}
          onChange={props.onChange}
          disabled={props.disabled ? "disabled" : ""}
          autoFocus={props.autoFocus ? "autoFocus" : ""}
        />
        <label htmlFor={props.id} className="form__label">
          {props.name}
          {props.required ? <span className="isRequiredStar">*</span> : ""}
        </label>
      </div>
    </div>
  );
}

export default Input;
