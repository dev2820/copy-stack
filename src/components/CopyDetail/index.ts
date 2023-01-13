import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import type Copy from "@/types/Copy";
import type Entity from "@/types/Entity";
import type Text from "@/types/Text";
import COPY_TYPE from "@/constants/COPY_TYPE";
import blob2url from "@/utils/blob2url";
import byte2kbyte from "@/utils/byte2kbyte";
import timeFormater from "@/utils/timeFormater";
import * as ICON_NAME from "@/constants/ICON_NAME";
import * as ICON_SIZE from "@/constants/ICON_SIZE";

@customElement("copy-detail")
export default class CopyDetail extends LitElement {
  @property()
  copy: Entity<Copy> | null = null;

  constructor() {
    super();
  }
  render() {
    if (!this.copy) return html`<p>no target copy exist</p>`;

    return html`
      ${this.createDetail(this.copy)} ${this.createMetaData(this.copy)}
    `;
  }

  createDetail(copy: Entity<Copy>) {
    if (copy.type === COPY_TYPE.TEXT) {
      return this.createTextDetail(copy);
    }

    if (copy.type === COPY_TYPE.IMAGE) {
      return this.createImageDetail(copy);
    }

    return "";
  }
  createTextDetail(copy: Entity<Copy>) {
    return html` <p>${copy.content}</p> `;
  }
  createImageDetail(copy: Entity<Copy>) {
    const imgUrl = blob2url(copy.content as Blob);
    return html`<img src="${imgUrl}" />`;
  }
  createMetaData(copy: Entity<Copy>) {
    return html`
      <ul>
        <li>
          <material-icon
            class="icon"
            icon="${ICON_NAME.CALENDER}"
            size="${ICON_SIZE.MEDIUM}"
          ></material-icon>
          <span class="text">${timeFormater(new Date(copy.created))}</span>
        </li>
        ${copy.type === COPY_TYPE.TEXT
          ? html` <li>
              <material-icon
                class="icon"
                icon="${ICON_NAME.TEXT}"
                size="${ICON_SIZE.MEDIUM}"
              ></material-icon>
              <span class="text">
                ${(copy.content as Text).length}
                <small class="unit">chars</small>
              </span>
            </li>`
          : ""}
        ${copy.type === COPY_TYPE.IMAGE
          ? html` <li>
              <material-icon
                class="icon"
                icon="${ICON_NAME.IMAGE}"
                size="${ICON_SIZE.MEDIUM}"
              ></material-icon>
              <span class="text">
                ${byte2kbyte((copy.content as Blob).size)}
                <small class="unit">bytes</small>
              </span>
            </li>`
          : ""}
        <li>
          <material-icon
            class="icon"
            icon="${ICON_NAME.GLOBE}"
            size="${ICON_SIZE.MEDIUM}"
          ></material-icon>
          <a href="${copy.source}" target="_blank" class="text">
            ${copy.source}
          </a>
        </li>
      </ul>
    `;
  }

  static styles = css`
    ul {
      list-style: none;
      padding-left: 0;
      display: flex;
      flex-direction: column;
    }
    ul > li {
      width: 100%;
      display: flex;
      flex-direction: row;
    }
    ul > li > * {
      margin: auto 0;
      height: 100%;
      line-height: 2rem;
    }
    ul > li > .icon {
      flex-shrink: 0;
      margin-right: 1rem;
      width: 2rem;
      height: 100%;
      margin-top: 0;
    }
    ul > li > .text {
      word-break: break-all;
      display: block;
      flex-grow: 1;
    }
    small.unit {
      margin-left: 0.25rem;
    }
  `;
}
