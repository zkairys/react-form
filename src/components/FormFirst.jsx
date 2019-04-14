import React from "react";

//components
import TxtInput from "./TxtInput";

const FormFirst = props => {
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
                </div>
                <TxtInput name="name" label="Name" onChange={null} />
            </div>
        </section>
    );
};
export default FormFirst;
