import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import blob2url from "@/utils/blob2url";
import timeFormater from "@/utils/timeFormater";
import textSummary from "@/utils/textSummary";
import type Entity from "@/types/Entity";
import type Copy from "@/types/Copy";
import PREVIEW from "@/constants/PREVIEW";
import COPY_TYPE from "@/constants/COPY_TYPE";
import router from "@/modules/router";

import "@/components/FilledCard";
import "@/components/FilledButton";
import "@/components/TextButton";
import "@/components/CopyMenu";
import "@/components/FaviconImg";

@customElement("copied-item")
export default class CopiedItem extends LitElement {
  @property({ type: Object, reflect: true })
  copy!: Entity<Copy>;

  @state()
  size: number = 32;

  constructor() {
    super();
  }
  render() {
    return html`
      <header>
        <div class="meta-info">
          <favicon-img
            domain="${this.copy.source}"
            size="${this.size}"
          ></favicon-img>
          ${this.sourceInfoRender()}
        </div>
        <a class="show-detail" @click="${this.#goToDetail}"> show detail </a>
      </header>
      <article>${this.summaryRender()}</article>
      <copy-menu .copy="${this.copy}"></copy-menu>
    `;
  }

  sourceInfoRender() {
    return html`<div class="source-info">
      <h4 class="title overflow-ellipsis" title="${this.copy.source}">
        ${this.copy.source}
      </h4>
      <small class="created">
        ${timeFormater(new Date(this.copy.created))}
      </small>
    </div>`;
  }

  summaryRender() {
    if (this.copy.type === COPY_TYPE.TEXT) {
      return html`
        <p>
          ${textSummary(this.copy.content as string, PREVIEW.MAX_TEXT_LENGTH)}
        </p>
      `;
    }

    if (this.copy.type === COPY_TYPE.IMAGE) {
      return html`<img src="${blob2url(this.copy.content as Blob)}" />`;
    }

    return "";
  }

  #goToDetail() {
    router.go(`/${this.copy.id}`);
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
      width: 100%;
      overflow: hidden;
    }
    .meta-info {
      width: 100%;
      display: flex;
      flex-direciton: row;
      gap: 0.5rem;
    }
    .meta-info > * {
      margin: auto 0;
    }
    .source-info {
      flex-grow: 1;
      overflow: hidden;
    }
    h4.title {
      margin: 0;
    }
    small.created {
      display: block;
      color: var(--placeholder-color);
    }
    a.show-detail {
      color: var(--primary-color);
      cursor: pointer;
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
