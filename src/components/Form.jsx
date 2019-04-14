import React from "react";

//components
import FormIntro from "./FormIntro";
import FormFirst from "./FormFirst";
import FormSecond from "./FormSecond";
import FormThird from "./FormThird";
import FormFourth from "./FormFourth";
import FormSummary from "./FormSummary";

class Form extends React.PureComponent {
    state = {
        agree: false,
        name: "",
        step: 1,
        active: false
    };

    // next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    // prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    handleChange = e => {
        this.setState({
            // [e.target.name]: e.target.value
            [e.target.name]:
                e.target.type === "checkbox" ? e.target.checked : e.target.value
        });
    };

    render() {
        const { step, active, name, agree } = this.state;

        return (
            <form action="" method="post" className="form">
                <div className="inner inner--inside">
                    {this.state.step === 1 && (
                        <FormIntro
                            handleChange={this.handleChange}
                            agree={agree}
                            nextStep={this.nextStep}
                        />
                    )}

                    {this.state.step === 2 && (
                        <FormFirst
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            name={name}
                            handleChange={this.handleChange}
                        />
                    )}

                    {this.state.step === 3 && (
                        <FormSecond
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                        />
                    )}

                    {this.state.step === 3 && (
                        <FormThird
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                        />
                    )}

                    {this.state.step === 3 && (
                        <FormFourth
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                        />
                    )}

                    {this.state.step === 3 && (
                        <FormSummary prevStep={this.prevStep} />
                    )}
                </div>
            </form>
        );
    }
}

export default Form;
