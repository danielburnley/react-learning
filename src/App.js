import React, { Component } from "react";
import Intro from "./Intro";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Waddup gamers</h1>
        </header>
        <Intro />
      </div>
    );
  }
}

export default App;
