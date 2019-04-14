import React from "react";

//components
import Input from "./Input";

class FormThird extends React.PureComponent {
    constructor(props) {
        super(props);

        this.validate = this.validate.bind(this);
    }

    validate(e) {
        e.preventDefault();
        if (this.props.age === "") {
            alert("Type your age");
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
                    <Input
                        name="age"
                        label="Age"
                        handleChange={this.props.handleChange}
                        input={this.props.age}
                        type="number"
                        max="2"
                    />
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
export default FormThird;
