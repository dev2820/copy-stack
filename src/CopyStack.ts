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
    header {
      padding: 1rem 0.5rem;
      border-bottom: 2px solid var(--boundary-color);
      z-index: 10;
    }
    header > #title {
      margin: 0;
      font-size: 1.5rem;
      font-weight: bold;
    }
    section {
      padding: 0.5rem;
      overflow: scroll;
    }
  `;
}
