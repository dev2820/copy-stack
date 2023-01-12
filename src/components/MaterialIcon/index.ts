import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import type IconSize from "@/types/IconSize";
import * as ICON_SIZE from "@/constants/ICON_SIZE";
import iconSprite16 from "@/assets/images/icon-sprite-16.png";
import iconSprite32 from "@/assets/images/icon-sprite-32.png";
import iconSprite48 from "@/assets/images/icon-sprite-48.png";

@customElement("material-icon")
export default class FilledChip extends LitElement {
  @property({ type: String })
  icon: string = "none";

  @property({ type: String })
  size: IconSize = ICON_SIZE.SMALL;

  render() {
    return html`<span
      class="icon ${this.icon} ${this.size}"
      style="background-image:url(${this.getSprite()})"
    ></span>`;
  }

  getSprite() {
    if (this.size === ICON_SIZE.LARGE) {
      return iconSprite48;
    }
    if (this.size === ICON_SIZE.MEDIUM) {
      return iconSprite32;
    }
    return iconSprite16;
  }

  static styles = css`
    .small {
      --unit: 1rem;
    }
    .medium {
      --unit: 2rem;
    }
    .large {
      --unit: 3rem;
    }
    .icon {
      display: inline-block;
    }
    .icon {
      width: var(--unit);
      height: var(--unit);
    }
    .icon.none {
    }
    .icon.check {
      background-position: calc(-1 * var(--unit)) 0rem;
    }
    .icon.arrow-back {
      background-position: calc(-2 * var(--unit)) 0rem;
    }
  `;
}
