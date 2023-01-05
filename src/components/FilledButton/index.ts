import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("filled-button")
export default class FilledButton extends LitElement {
  @property()
  theme = "";

  render() {
    return html`
      <button class="filled" theme=${this.theme}>
        <slot></slot>
      </button>
    `;
  }

  static styles = css`
    button.filled {
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 9999px;
      cursor: pointer;
      font-weight: bold;
    }
    button[theme="primary"] {
      background: var(--primary-color);
    }
  `;
}
