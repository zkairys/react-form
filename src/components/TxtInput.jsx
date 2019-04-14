import React from "react";

const TxtInput = props => (
    <div
        className={
            props.input ? "text-input text-input__filled" : " text-input"
        }
    >
        <input
            type="text"
            id={props.name}
            name={props.name}
            value={props.input}
            onChange={props.handleChange}
        />
        <label htmlFor={props.name}>{props.label}</label>
    </div>
);

export default TxtInput;
