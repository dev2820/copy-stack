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
      border-radius: 9999px;
      cursor: pointer;
      padding: 0;
      background: transparent;
    }
    button[theme="alert"] {
      color: var(--alert-color);
    }
    button[theme="alert"]:hover {
      color: var(--alert-color-light);
    }
    button[theme="primary"] {
      color: var(--primary-color);
    }
    button[theme="primary"]:hover {
      color: var(--primary-color-light);
    }
  `;
}
