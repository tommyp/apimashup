class Mashup {
  constructor() {
    this.apis = [];

    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    console.log("clicked");

    const api_1 = await this.fetchApi();
    const api_2 = await this.fetchApi();
    this.apis = [api_1, api_2];
    this.renderApis();
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
    document.getElementById("data").innerHTML = this.render();
  }

  render() {
    return `
      <h2>What can you make with ${this.apis[0].name} and ${this.apis[1].name}?</h2>
      <div class="apis">
        <div class="api">
          <h2>${this.apis[0].name}</h2>
          <p>${this.apis[0].description}</p>
          <a href="${this.apis[0].link}" target="_blank">${this.apis[0].link}</a>
        </div>
        <div class="api">
          <h2>${this.apis[1].name}</h2>
          <p>${this.apis[1].description}</p>
          <a href="${this.apis[1].link}" target="_blank">${this.apis[1].link}</a>
        </div>
      </div>
    `;
  }
}
