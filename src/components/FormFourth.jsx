import React from "react";

//components
import Input from "./Input";

class FormFourth extends React.PureComponent {
    constructor(props) {
        super(props);

        this.validate = this.validate.bind(this);
    }

    validate(e) {
        e.preventDefault();
        if (this.props.age > 19 && this.props.job === "") {
            alert("Type your Job Title");
            return;
        }

        if (this.props.age < 19 && this.props.school === "") {
            alert("Type your School Name");
            return;
        }

        this.props.nextStep();
    }

    render() {
        return (
            <section className="form-section">
                <div className="form-section__body">
                    <h1 className="title title--big">
                        Sed ut perspiciatis unde omnis
                    </h1>
                    <div className="text">
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                        </p>
                    </div>

                    {this.props.age > 19 ? (
                        <Input
                            name="job"
                            label="Job"
                            handleChange={this.props.handleChange}
                            input={this.props.job}
                        />
                    ) : (
                        <Input
                            name="school"
                            label="School"
                            handleChange={this.props.handleChange}
                            input={this.props.school}
                        />
                    )}

                    <div className="flex-wrap flex-wrap--align-baseline">
                        <button
                            className="btn btn--uppercase"
                            onClick={this.props.prevStep}
                        >
                            Back
                        </button>
                        <button
                            className="btn btn--uppercase"
                            onClick={this.validate}
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </section>
        );
    }
}
export default FormFourth;
