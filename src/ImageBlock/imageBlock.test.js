import React from "react";
import { shallow } from "enzyme";
import ImageBlock from ".";

describe("ImageBlock", () => {
  describe("acceptance", () => {
    it("renders without crashing", () => {
      shallow(
        <ImageBlock imageUrl="https://example.com/" imageAltText="A picture" />
      );
    });
  });

  describe("unit", () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallow(
        <ImageBlock imageUrl="https://example.com/" imageAltText="A picture" />
      );
    });

    it("sets the image src", () => {
      expect(wrapper.find("img").props().src).toBe("https://example.com/");
    });

    it("sets the image alt text", () => {
      expect(wrapper.find("img").props().alt).toBe("A picture");
    });
  });
});
