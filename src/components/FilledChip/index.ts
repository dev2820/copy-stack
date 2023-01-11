import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import checkIcon from "@/assets/images/check.png";

@customElement("filled-chip")
export default class FilledChip extends LitElement {
  @property({ type: Boolean })
  checked!: boolean;

  constructor() {
    super();
    this.#created();
  }
  render() {
    return html`
      <label class="${this.checked ? "checked" : ""}">
        <input
          type="checkbox"
          ?checked=${this.checked}
          @change="${this.#changeHandler}"
        />
        ${this.checked ? html`<img src="${checkIcon}" />` : ""}
        <slot></slot>
      </label>
    `;
  }

  #created() {
    this.#initValues();
  }

  #initValues() {
    this.checked = false;
  }

  #changeHandler() {
    this.checked = !this.checked;
  }
  static styles = css``;
}
