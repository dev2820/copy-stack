import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("text-button")
export default class FilledButton extends LitElement {
  @property()
  theme = "";

  render() {
    return html`
      <button class="text" theme=${this.theme}>
        <slot></slot>
      </button>
    `;
  }

  static styles = css`
    button.text {
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 9999px;
      cursor: pointer;

      font-weight: bold;
      background: transparent;
    }
    button[theme="alert"] {
      color: var(--alert-color);
    }
    button[theme="primary"] {
      color: var(--primary-color);
    }
  `;
}
