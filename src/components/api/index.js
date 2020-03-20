import React from "react";

export default class extends React.Component {
  render() {
    return (
      <div className="api">
        <h2>{this.props.name}</h2>
        <p>{this.props.description}</p>
        <a href={this.props.link} _target="blank">
          {this.props.link}
        </a>
      </div>
    );
  }
}
