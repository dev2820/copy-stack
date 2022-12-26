import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import style from "@/components/CopyList/style";

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

  static styles = style;
}
