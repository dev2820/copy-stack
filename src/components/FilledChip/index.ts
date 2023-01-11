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
  static styles = css`
    label {
      box-sizing: border-box;
      height: 2rem;
      padding: 0.375rem 1rem 0.375rem 1rem;
      background: var(--filled-surface-color);
      border-radius: var(--radius);
      cursor: pointer;
      display: inline-flex;
      flex-direction: row;
      line-height: 1.2rem;
      user-select: none;
    }
    label.checked {
      background: var(--primary-color);
      padding: 0.375rem 1rem 0.375rem 0.5rem;
    }
    label > img {
      width: 1rem;
      height: 1rem;
      margin: auto 0;
      margin-right: 0.625rem;
    }
    input[type="checkbox"] {
      opacity: 0;
      width: 0px;
      height: 0px;
      margin: 0;
    }
  `;
}
