import React, { Component } from "react";
import "./App.scss";

// Components
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <div class="inner">
            <Form />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
