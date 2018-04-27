import React from "react";
import "./style.css";

export default class Header extends React.Component {
  render() {
    return (
      <header className="background-dark">
        <div className="header-content">
          <h1 className="title">
            Good Dogs<span className="super">*</span>
          </h1>
          <h4 className="subtitle">(*They're all Good Dogs)</h4>
        </div>
      </header>
    );
  }
}
