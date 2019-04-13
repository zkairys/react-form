import React, { Component } from "react";
import "./App.scss";

// Components
import Form from "./components/Form";

class App extends Component {
    render() {
        return (
            <div className="App">
                <main>
                    <article>
                        <div className="inner inner--border inner--backgroud-white">
                            <Form />
                        </div>
                    </article>
                </main>
            </div>
        );
    }
}

export default App;
