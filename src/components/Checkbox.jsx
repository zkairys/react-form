import React from "react";

const Checkbox = props => (
    <div className="checkbox">
        <input
            id={props.name}
            name={props.name}
            type="checkbox"
            onChange={props.onChange}
            checked={props.agree}
        />
        <label htmlFor={props.name}>{props.label}</label>
    </div>
);

export default Checkbox;
