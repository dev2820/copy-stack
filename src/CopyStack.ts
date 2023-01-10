import { LitElement, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";

import "@/components/CopyList";

@customElement("copy-stack")
export default class CopyList extends LitElement {
  constructor() {
    super();
    this.#created();
  }
  render() {
    return html`
      <header>
        <h1 id="title">Copy Stack</h1>
      </header>
      <section>
        <copy-list></copy-list>
      </section>
    `;
  }

  async #created() {}

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    #title {
      margin: 1rem 0;
    }
    section {
      overflow: scroll;
    }
  `;
}
