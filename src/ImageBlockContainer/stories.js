import React from "react";
import { storiesOf } from "@storybook/react";
import ImageBlockContainer from ".";

storiesOf("ImageBlockContainer", module)
  .add("With no blocks provided", () => <ImageBlockContainer />)
  .add("With one image", () => (
    <ImageBlockContainer
      blocks={[
        {
          url:
            "https://images.dog.ceo/breeds/schnauzer-miniature/n02097047_4844.jpg",
          altText: "A picture",
          description: "A picture of a dog"
        }
      ]}
    />
  ))
  .add("With four images", () => (
    <ImageBlockContainer
      blocks={[
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
        }
      ]}
    />
  ))
  .add("With eight images", () => (
    <ImageBlockContainer
      blocks={[
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
      ]}
    />
  ));
