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
        email: "",
        age: "",
        job: "",
        school: "",
        step: 1
    };

    // next step
    nextStep = name => {
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
        let value = e.target.value;
        if (e.target.type === "number" && e.target.max) {
            if (value.length > 2) {
                value = value.slice(0, 2);
            }
        }

        this.setState({
            ...this.state,
            [e.target.name]:
                e.target.type === "checkbox" ? e.target.checked : value
        });
    };

    render() {
        const { step, name, agree, email, age, job, school } = this.state;

        return (
            <form action="" method="post" className="form">
                <div className="inner inner--inside">
                    {step === 1 && (
                        <FormIntro
                            handleChange={this.handleChange}
                            agree={agree}
                            nextStep={this.nextStep}
                        />
                    )}

                    {step === 2 && (
                        <FormFirst
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            name={name}
                            handleChange={this.handleChange}
                        />
                    )}

                    {step === 3 && (
                        <FormSecond
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            email={email}
                            handleChange={this.handleChange}
                        />
                    )}

                    {step === 4 && (
                        <FormThird
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            age={age}
                            handleChange={this.handleChange}
                        />
                    )}

                    {step === 5 && (
                        <FormFourth
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            age={age}
                            job={job}
                            school={school}
                            handleChange={this.handleChange}
                        />
                    )}

                    {step === 6 && (
                        <FormSummary
                            name={name}
                            email={email}
                            age={age}
                            job={job}
                            school={school}
                        />
                    )}
                </div>
            </form>
        );
    }
}

export default Form;
