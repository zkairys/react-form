import React from "react";

const FormSummary = props => {
    return (
        <section className="form-section">
            <div className="form-section__body">
                <h1 className="title title--big">Thank You!</h1>
                <div className="text">
                    <p>
                        Name: <span>{props.name}</span>
                    </p>
                    <p>
                        Email: <span>{props.email}</span>
                    </p>
                    <p>
                        Age: <span>{props.age}</span>
                    </p>
                    {props.job && (
                        <p>
                            Job: <span>{props.job}</span>
                        </p>
                    )}
                    {props.school && (
                        <p>
                            School: <span>{props.school}</span>
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};
export default FormSummary;
