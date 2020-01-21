import React from "react";

export default class extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3>Click</h3>
        <button onClick={this.props.onClick}>Randomise!</button>
      </React.Fragment>
    );
  }
}
