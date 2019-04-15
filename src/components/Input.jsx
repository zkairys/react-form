import React from "react";

const Input = props => (
    <div className={props.input ? "input input__filled" : " input"}>
        <input
            type={props.type}
            id={props.name}
            name={props.name}
            value={props.input}
            onChange={props.handleChange}
            max={props.max}
        />
        <label htmlFor={props.name}>{props.label}</label>
    </div>
);

export default Input;
