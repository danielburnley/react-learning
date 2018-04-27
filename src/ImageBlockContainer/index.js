import React from "react";
import PropTypes from "prop-types";
import ImageBlock from "../ImageBlock";
import "./style.css";

export default class ImageBlockContainer extends React.Component {
  renderBlocks() {
    return this.props.blocks.map(({ url, altText, description }, index) => (
      <div className="image-block" key={index}>
        <ImageBlock
          imageUrl={url}
          imageAltText={altText}
          description={description}
        />
      </div>
    ));
  }
  render() {
    return (
      <div className="image-block-content">
        {this.renderBlocks()}
      </div>
    )
  }
}

ImageBlockContainer.defaultProps = {
  blocks: []
};

ImageBlockContainer.propTypes = {
  blocks: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      altText: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  )
};
