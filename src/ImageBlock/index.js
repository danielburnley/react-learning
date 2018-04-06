import React from "react";
import PropTypes from "prop-types"
import './style.css'

export default class ImageBlock extends React.Component {
  render() {
    return (
      <div class="block">
        <img className="block-img" src={this.props.imageUrl} alt={this.props.imageAltText} />
        <div className="block-text">{this.props.children}</div>
      </div>
    );
  }
}

ImageBlock.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageAltText: PropTypes.string.isRequired
}
