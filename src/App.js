import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Styles/typography.css";
import "./Styles/colors.css";
import "./Styles/layout.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="background-light" style={{height: '500px'}}/>
        <Footer />
      </div>
    );
  }
}

export default App;
