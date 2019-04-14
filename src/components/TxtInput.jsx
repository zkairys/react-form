import React from "react";

const TxtInput = props => (
    <div className="text-input">
        <label htmlFor={props.name}>{props.label}</label>
        <input
            type="text"
            id={props.name}
            name={props.name}
            value={props.nameForm}
            onChange={null}
        />
    </div>
);

export default TxtInput;
