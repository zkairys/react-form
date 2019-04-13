import React from "react";

//components
import FormIntro from "./FormIntro";
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
          <section className="form form-payment">
            <div />
          </section>

          <section className="form form-payment">
            <div />
          </section>

          <div className="form__agree">
            <input
              type="checkbox"
              id="agre"
              name="agree"
              value="agree"
              className="form__agree__input"
              required="required"
            />
            <label htmlFor="agre">
              By accepting this agreement, I acknowledge that I have read,
              understand and agree to the.
            </label>
          </div>

          <button
            className="btn btn--center"
            type="submit"
            form="form"
            value="Join"
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
