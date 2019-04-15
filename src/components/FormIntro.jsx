import React from "react";

//components
import Checkbox from "./Checkbox";

const FormIntro = props => {
    return (
        <section className="form-section">
            <div className="form-section__body">
                <h1 className="title title--big">
                    Sed ut perspiciatis unde omnis
                </h1>
                <div className="text">
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                </div>

                <div className="flex-wrap flex-wrap--align-baseline">
                    <Checkbox
                        name="agree"
                        label="Agree"
                        onChange={props.handleChange}
                        agree={props.agree}
                    />

                    {props.agree && (
                        <button
                            className="btn btn--uppercase"
                            onClick={props.nextStep}
                        >
                            Continue
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};
export default FormIntro;
