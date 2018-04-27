import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import ImageBlockContainer from "../ImageBlockContainer";
import "./style.css";
import "../Styles/typography.css";
import "../Styles/colors.css";
import "../Styles/layout.css";

export default class App extends Component {
  mockBlocks() {
    return [
      {
        url:
          "https://images.dog.ceo/breeds/schnauzer-miniature/n02097047_4844.jpg",
        altText: "A picture",
        description: "Miniature Schnauzer"
      },
      {
        url: "https://images.dog.ceo/breeds/collie-border/n02106166_930.jpg",
        altText: "A picture",
        description: "Border Collie"
      },
      {
        url: "https://images.dog.ceo/breeds/collie-border/n02106166_4107.jpg",
        altText: "A picture",
        description: "Border Collie"
      },
      {
        url: "https://images.dog.ceo/breeds/chow/n02112137_2411.jpg",
        altText: "A picture",
        description: "Chow"
      },
      {
        url: "https://images.dog.ceo/breeds/chow/n02112137_2411.jpg",
        altText: "A picture",
        description: "Chow"
      },
      {
        url: "https://images.dog.ceo/breeds/collie-border/n02106166_4107.jpg",
        altText: "A picture",
        description: "Border Collie"
      },
      {
        url:
          "https://images.dog.ceo/breeds/schnauzer-miniature/n02097047_4844.jpg",
        altText: "A picture",
        description: "Miniature Schnauzer"
      },
      {
        url: "https://images.dog.ceo/breeds/collie-border/n02106166_930.jpg",
        altText: "A picture",
        description: "Border Collie"
      }
    ];
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="content">
          <ImageBlockContainer blocks={this.mockBlocks()} />
        </div>
        <Footer />
      </div>
    );
  }
}
