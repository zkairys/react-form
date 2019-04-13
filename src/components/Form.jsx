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
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { step, active, name } = this.state;

    return (
      <form action="" method="post" className="form">
        <div className="inner inner--inside">
          <FormIntro />
          <FormFirst />
          <FormSecond />
          <FormThird />
          <FormFourth />
          <FormSummary />
        </div>
      </form>
    );
  }
}

export default Form;
