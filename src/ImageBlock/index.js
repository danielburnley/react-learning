import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export default class ImageBlock extends React.Component {
  render() {
    return (
      <div className="block">
        <img
          className="block-img"
          src={this.props.imageUrl}
          alt={this.props.imageAltText}
        />
        <p className="block-text">{this.props.description}</p>
      </div>
    );
  }
}

ImageBlock.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageAltText: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
