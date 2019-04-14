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
        active: true
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
        console.log(e.target.value, e.target.checked);
    };

    render() {
        const { step, active, name } = this.state;

        return (
            <form action="" method="post" className="form">
                <div className="inner inner--inside">
                    {this.state.step === 1 && (
                        <FormIntro
                            handleChange={this.handleChange}
                            agree={this.state.agree}
                            nextStep={this.nextStep}
                        />
                    )}

                    {this.state.step === 2 && <FormFirst />}

                    {this.state.step === 3 && <FormSecond />}

                    {this.state.step === 3 && <FormThird />}

                    {this.state.step === 3 && <FormFourth />}

                    {this.state.step === 3 && <FormSummary />}
                </div>
            </form>
        );
    }
}

export default Form;
