import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import type Copy from "@/types/Copy";
import clipboardSystem from "@/modules/clipboardSystem";
import createDeleteCopyEvent from "@/utils/event/createDeleteCopyEvent";
import COPIED_ITEM from "@/constants/COPIED_ITEM";
import PREVIEW from "@/constants/PREVIEW";

import "@/components/FilledCard";
import "@/components/FilledButton";
import "@/components/TextButton";

@customElement("copied-item")
export default class CopiedItem extends LitElement {
  @property({ type: Object, reflect: true })
  copy!: Copy;

  constructor() {
    super();
  }
  render() {
    return html`
      <header>
        <h4 class="title overflow-ellipsis" title="${this.copy.source}">
          ${this.copy.source}
        </h4>
        <small class="created">
          ${this.#timeStringFormater(new Date(this.copy.created))}
        </small>
      </header>
      <article>
        ${typeof this.copy.content === "string"
          ? html`<p>${this.#summary(this.copy.content)}</p>`
          : html`<img src="${this.#blob2url(this.copy.content)}" />`}
      </article>
      <menu type="list">
        <filled-button theme="primary" @click=${() => this.#handleCopy()}>
          copy
        </filled-button>
        <text-button theme="alert" @click=${() => this.#deleteCopy()}>
          delete
        </text-button>
      </menu>
    `;
  }

  #blob2url(input: Blob | string) {
    if (typeof input === "string") return "";

    return URL.createObjectURL(input);
  }
  #handleCopy() {
    clipboardSystem.toClipboard(this.copy.content);
  }
  #deleteCopy() {
    const idStr = this.dataset[COPIED_ITEM.DATASET.ID];
    if (!idStr) return;

    const id = parseInt(idStr, 10);
    const deleteCopyEvent = createDeleteCopyEvent(id);
    this.dispatchEvent(deleteCopyEvent);
  }
  #summary(str: string) {
    if (str.length > PREVIEW.MAX_TEXT_LENGTH) {
      return str.slice(PREVIEW.MAX_TEXT_LENGTH) + "...";
    }
    return str;
  }
  #timeStringFormater(date: Date) {
    const language = window.navigator.language;
    const format = new Intl.DateTimeFormat(language, {
      dateStyle: "full",
      timeStyle: "short",
    }).format(date);

    return format;
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .overflow-ellipsis {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    header {
      text-align: left;
    }
    header > h4.title {
      margin: 0;
    }
    header > small.created {
      color: var(--placeholder-color);
    }
    article {
      display: flex;
      flex-direction: column;
    }
    article > p {
      text-align: left;
    }
    article > img {
      margin: 0 auto;
      display: block;
      max-width: 100%;
      max-height: 100%;
      width: auto;
      height: auto;
      border-radius: var(--card-radius);
    }
    menu[type="list"] {
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: row-reverse;
    }
  `;
}
