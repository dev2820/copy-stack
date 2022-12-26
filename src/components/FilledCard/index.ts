import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("filled-card")
export default class FilledCard extends LitElement {
  render() {
    return html`
      <div class="card filled">
        <slot></slot>
      </div>
    `;
  }

  static styles = css`
    div.card {
      background: var(--surface-color, white);
      border-radius: 0.75rem;
      padding: 0.5rem;
    }
  `;
}