import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Flix</h1>
          <p>
            Experience a rollercoaster of emotions and capture your reactions in
            real-time!
          </p>
          <button onClick={this.startExperience}>Start the Experience</button>
        </header>
      </div>
    );
  }

  startExperience() {
    console.log("Starting the emotional journey");
  }
}

export default App;
