import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import blob2url from "@/utils/blob2url";
import timeFormater from "@/utils/timeFormater";
import type Entity from "@/types/Entity";
import type Copy from "@/types/Copy";
import PREVIEW from "@/constants/PREVIEW";
import COPY_TYPE from "@/constants/COPY_TYPE";
import router from "@/modules/router";

import "@/components/FilledCard";
import "@/components/FilledButton";
import "@/components/TextButton";
import "@/components/CopyMenu";

/**
 * CopiedItem은 header와 summary, 그리고 menu로 이루어진다.
 * header는 도메인 favicon을 포함하고 글을 생성한 주소, 날짜가 출력된다. detail을 볼 수 있는 show detail 버튼도 있다.
 * summary는 요약된 내용이 보인다. 글의 경우 요약된 텍스트가 나타나고 이미지의 경우 이미지가 작게 표시된다.
 * menu의 경우 CopiedItem을 삭제하거나 복사할 수 있다.
 */
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
          <img
            class="domain"
            src="https://www.google.com/s2/favicons?domain=${this.copy
              .source}&sz=${this.size}"
          />
          <div>
            <h4 class="title overflow-ellipsis" title="${this.copy.source}">
              ${this.copy.source}
            </h4>
            <small class="created">
              ${timeFormater(new Date(this.copy.created))}
            </small>
          </div>
        </div>
        <a class="show-detail" @click="${() => this.#goToDetail(this.copy.id)}">
          show detail
        </a>
      </header>
      <article>
        ${this.copy.type === COPY_TYPE.TEXT
          ? html`<p>${this.#summary(this.copy.content as string)}</p>`
          : html`<img src="${blob2url(this.copy.content as Blob)}" />`}
      </article>
      <copy-menu .copy="${this.copy}"></copy-menu>
    `;
  }
  #summary(str: string) {
    if (str.length > PREVIEW.MAX_TEXT_LENGTH) {
      return str.slice(0, PREVIEW.MAX_TEXT_LENGTH) + "...";
    }
    return str;
  }

  #goToDetail(id: number) {
    router.go(`/${id}`);
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
    .meta-info {
      display: flex;
      flex-direciton: row;
      gap: 0.5rem;
    }
    .meta-info > * {
      margin: auto 0;
    }
    img.domain {
      width: 2rem;
      height: 2rem;
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
