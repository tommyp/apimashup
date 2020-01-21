import React from "react";
import Randomise from "../randomise";
import Api from "../api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apis: []
    };

    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    const api = await this.fetchApi();
    const api_2 = await this.fetchApi();
    this.setState({ apis: [api, api_2] });
  }

  async fetchApi() {
    const response = await fetch("https://api.publicapis.org/random");
    const json = await response.json();
    const api = json.entries[0];
    return {
      name: api.API,
      description: api.Description,
      link: api.Link
    };
  }

  renderApis() {
    return this.state.apis.map(api => <Api {...api} key={api.link} />);
  }

  render() {
    return (
      <React.Fragment>
        {this.state.apis.length > 0 && this.renderApis()}
        <Randomise onClick={this.handleClick} />
      </React.Fragment>
    );
  }
}
