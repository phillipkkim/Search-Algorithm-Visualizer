import React, { Component } from "react";
import "./block.css";

class Block extends Component {
  render() {
    const { state, height } = this.props;

    return (
      <div
        className={`block block-${state}`}
        style={{ height: `${height}px` }}
      ></div>
    );
  }
}

export default Block;
