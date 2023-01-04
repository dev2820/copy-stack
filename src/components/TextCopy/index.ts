import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import type Copy from "@/types/Copy";
import clipboardSystem from "@/modules/clipboardSystem";
import "@/components/FilledCard";
import "@/components/FilledButton";

@customElement("text-copy")
export default class TextCopy extends LitElement {
  @property({ type: Object, reflect: true })
  copy!: Copy;

  constructor() {
    super();
  }
  render() {
    return html`
      <header>
        <h4 class="title">${this.copy.source}</h4>
        <small class="created">${this.copy.created}</small>
      </header>
      <article>
        <p>${this.copy.content}</p>
      </article>
      <menu type="list">
        <filled-button theme="primary" @click=${() => this.#handleCopy()}>
          copy
        </filled-button>
      </menu>
    `;
  }

  #handleCopy() {
    clipboardSystem.toClipboard(this.copy.content);
  }

  static styles = css`
    :host {
    }
    header {
    }
    header > h4.title {
      margin: 0;
    }
    header > small.created {
      color: var(--placeholder-color);
    }
    menu[type="list"] {
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: row-reverse;
    }
  `;
}
