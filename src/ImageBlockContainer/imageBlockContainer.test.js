import React from "react";
import { mount, shallow } from "enzyme";
import ImageBlockContainer from ".";

describe("ImageBlockContainer", () => {
  describe("Acceptance", () => {
    it("Renders without crashing", () => {
      mount(
        <ImageBlockContainer
          blocks={[
            {
              url: "https://example.com",
              altText: "A picture",
              description: "A picture of a dog"
            }
          ]}
        />
      );
    });
  });

  describe("Unit", () => {
    let wrapper, blocks;

    beforeEach(() => {
      wrapper = mount(<ImageBlockContainer blocks={blocks} />);
    });

    describe("Given no blocks", () => {
      beforeAll(() => {
        blocks = [];
      });

      it("Renders no ImageBlocks", () => {
        expect(wrapper.find("ImageBlock").length).toBe(0);
      });
    });

    describe("Given one block", () => {
      beforeAll(() => {
        blocks = [
          {
            url: "https://example.com",
            altText: "A picture",
            description: "A picture of a dog"
          }
        ];
      });

      it("Render a single ImageBlock", () => {
        expect(wrapper.find("ImageBlock").length).toBe(1);
      });

      it("Passes the values to the ImageBlock correctly", () => {
        let imageBlock = wrapper.find("ImageBlock").first();

        expect(imageBlock.props().imageUrl).toBe("https://example.com");
        expect(imageBlock.props().imageAltText).toBe("A picture");
        expect(imageBlock.props().description).toBe("A picture of a dog");
      });
    });

    describe("Given many blocks", () => {
      beforeAll(() => {
        blocks = [
          {
            url: "https://example.com",
            altText: "a picture",
            description: "a picture of a dog"
          },
          {
            url: "https://example2.com",
            altText: "a second picture",
            description: "a picture of a good boy"
          },
          {
            url: "https://example.com",
            altText: "a picture",
            description: "a picture of a dog"
          }
        ];
      });

      it("render many imageblocks", () => {
        expect(wrapper.find("ImageBlock").length).toBe(3);
      });
    });
  });
});
