import React from "react";

//components
import Input from "./Input";

class FormSecond extends React.PureComponent {
    constructor(props) {
        super(props);

        this.validate = this.validate.bind(this);
    }

    validate(e) {
        e.preventDefault();

        if (this.props.email === "") {
            alert("Please enter an email address.");
            return;
        }

        const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
            this.props.email.trim()
        );
        if (!validEmail) {
            alert("Please enter a valid email address.");
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
                        name="email"
                        label="Email"
                        handleChange={this.props.handleChange}
                        input={this.props.email}
                        type="email"
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
export default FormSecond;
