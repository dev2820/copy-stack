import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("copy-list")
export default class CopyList extends LitElement {
  @property()
  copyList = ["Website Title A", "Website Title B", "Website Title C"];

  @property({ type: Number })
  count = 0;

  render() {
    return html`
      <ul class="copy-list">
        ${this.copyList.map(
          (copy) =>
            html`<li><filled-card class="card">${copy}</filled-card></li>`
        )}
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
      padding: 0;
    }
    ul > li {
      margin-bottom: 0.5rem;
    }
  `;
}
