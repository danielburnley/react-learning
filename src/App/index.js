import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import "../Styles/typography.css";
import "../Styles/colors.css";
import "../Styles/layout.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}
