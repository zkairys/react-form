import React from "react";

//components
import Input from "./Input";

class FormFirst extends React.PureComponent {
    constructor(props) {
        super(props);

        this.validate = this.validate.bind(this);
    }

    validate(e) {
        e.preventDefault();
        if (this.props.name === "") {
            alert("Type your name");
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
                        name="name"
                        label="Name"
                        handleChange={this.props.handleChange}
                        input={this.props.name}
                        type="text"
                    />
                    <div className="flex-wrap flex-wrap--align-baseline">
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
export default FormFirst;
