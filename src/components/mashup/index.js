import React from "react";
import Randomise from "../randomise";
import Api from "../api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    window.history.pushState({}, "", "/up");
    this.state = {
      apis: []
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClick();
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
        <h1>apima.sh/up</h1>
        {this.state.apis.length > 0 && (
          <h2>
            What can you make with {this.state.apis[0].name} and{" "}
            {this.state.apis[1].name}?
          </h2>
        )}
        <div class="apis">
          {this.state.apis.length > 0 && this.renderApis()}
        </div>
        <Randomise onClick={this.handleClick} />

        <footer>
          Made by{" "}
          <a href="http://tommyp.org" target="_blank">
            Tommy
          </a>
          . Data from{" "}
          <a href="https://api.publicapis.org/" target="_blank">
            publicapis.org
          </a>
          . Have you used this to make something?{" "}
          <a href="http://twitter.com/tommypalm" target="_blank">
            Tell me!
          </a>
        </footer>
      </React.Fragment>
    );
  }
}
