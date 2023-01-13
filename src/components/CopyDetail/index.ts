import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import type Copy from "@/types/Copy";
import type Entity from "@/types/Entity";
import type Text from "@/types/Text";
import COPY_TYPE from "@/constants/COPY_TYPE";
import blob2url from "@/utils/blob2url";
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
      <ul class="meta">
        <li>
          <material-icon
            icon="${ICON_NAME.CALENDER}"
            size="${ICON_SIZE.MEDIUM}"
          ></material-icon>
          ${copy.created}
        </li>
        ${copy.type === COPY_TYPE.TEXT
          ? html` <li>
              <material-icon
                icon="${ICON_NAME.TEXT}"
                size="${ICON_SIZE.MEDIUM}"
              ></material-icon>
              ${(copy.content as Text).length}
            </li>`
          : ""}
        ${copy.type === COPY_TYPE.IMAGE
          ? html` <li>
              <material-icon
                icon="${ICON_NAME.IMAGE}"
                size="${ICON_SIZE.MEDIUM}"
              ></material-icon>
              ${(copy.content as Blob).size}
            </li>`
          : ""}
        <li>
          <material-icon
            icon="${ICON_NAME.GLOBE}"
            size="${ICON_SIZE.MEDIUM}"
          ></material-icon>
          ${copy.source}
        </li>
      </ul>
    `;
  }

  static styles = css`
    ul {
      list-style: none;
    }
  `;
}
