import React from "react";

export default class extends React.Component {
  render() {
    return (
      <div class="randomise">
        <button onClick={this.props.onClick}>Randomise</button>
      </div>
    );
  }
}
