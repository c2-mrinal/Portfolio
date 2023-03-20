import React from "react";

function Textarea(props) {
  return (
    <div>
      <div>
        <div className="form__group field">
          <textarea
            type={props.type || "text"}
            className="form__field"
            placeholder={props.name || ""}
            name={props.name}
            id={props.id}
            value={props.value}
            onChange={props.onChange}
          />
          <label htmlFor={props.id} className="form__label">
            {props.name}
          </label>
        </div>
      </div>
    </div>
  );
}

export default Textarea;
