import React from "react";
import { storiesOf } from "@storybook/react";
import ImageBlock from ".";

storiesOf("ImageBlock", module).add("default", () => (
  <ImageBlock
    imageUrl="https://dog.ceo/api/img/retriever-golden/n02099601_1743.jpg"
    imageAltText="A Good Boy"
  >
    <p>A Very Good dog</p>
  </ImageBlock>
));
