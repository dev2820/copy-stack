import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import type Copy from "@/types/Copy";

import "@/components/FilledCard";

@customElement("text-copy")
export default class TextCopy extends LitElement {
  @property({ type: Object, reflect: true })
  copy!: Copy;

  constructor() {
    super();
  }
  render() {
    console.log(this.copy);
    return html`
      <header>
        <h4 class="title">${this.copy.source}</h4>
        <small class="created">${this.copy.created}</small>
      </header>
      <p>${this.copy.content}</p>
      <button onclick="">copy</button>
    `;
  }

  static styles = css``;
}
