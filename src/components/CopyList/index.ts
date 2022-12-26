import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("copy-list")
export default class CopyList extends LitElement {
  @property()
  copyList = ["a", "b", "c"];

  @property({ type: Number })
  count = 0;

  render() {
    return html`
      <ul class="copy-list">
        ${this.copyList.map((copy) => html`<li class="card">${copy}</li>`)}
      </ul>
    `;
  }

  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    ul {
      list-style: none;
      padding: none;
    }
  `;
}
