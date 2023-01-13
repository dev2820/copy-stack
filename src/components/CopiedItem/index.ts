import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import clipboardSystem from "@/modules/clipboardSystem";
import createDeleteCopyEvent from "@/utils/event/createDeleteCopyEvent";
import blob2url from "@/utils/blob2url";
import timeFormater from "@/utils/timeFormater";
import type Entity from "@/types/Entity";
import type Copy from "@/types/Copy";
import PREVIEW from "@/constants/PREVIEW";
import COPY_TYPE from "@/constants/COPY_TYPE";

import "@/components/FilledCard";
import "@/components/FilledButton";
import "@/components/TextButton";

@customElement("copied-item")
export default class CopiedItem extends LitElement {
  @property({ type: Object, reflect: true })
  copy!: Entity<Copy>;

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
          ${timeFormater(new Date(this.copy.created))}
        </small>
      </header>
      <article>
        ${this.copy.type === COPY_TYPE.TEXT
          ? html`<p>${this.#summary(this.copy.content as string)}</p>`
          : html`<img src="${blob2url(this.copy.content as Blob)}" />`}
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
  #handleCopy() {
    clipboardSystem.toClipboard(this.copy.content);
  }
  #deleteCopy() {
    const deleteCopyEvent = createDeleteCopyEvent(this.copy.id);
    this.dispatchEvent(deleteCopyEvent);
  }
  #summary(str: string) {
    if (str.length > PREVIEW.MAX_TEXT_LENGTH) {
      return str.slice(0, PREVIEW.MAX_TEXT_LENGTH) + "...";
    }
    return str;
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
  `;
}
