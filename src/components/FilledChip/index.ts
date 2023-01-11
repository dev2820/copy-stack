import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

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
      <label>
        <input type="checkbox" ?checked=${this.checked} />
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
  static styles = css``;
}
