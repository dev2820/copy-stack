import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("copy-list-empty")
export default class CopyListEmpty extends LitElement {
  constructor() {
    super();
  }
  render() {
    return html`
      <p>Copy List Empty</p>
      <p>
        Make a copy using <kbd>Ctrl</kbd> + <kbd>C</kbd> or the context menu
      </p>
    `;
  }

  static styles = css`
    :host {
      text-align: center;
    }
  `;
}
