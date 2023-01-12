import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import iconSprite from "@/assets/images/icon-sprite.png";

@customElement("material-icon")
export default class FilledChip extends LitElement {
  @property({ type: String })
  icon: string = "none";

  render() {
    return html`<span
      class="icon ${this.icon}"
      style="background-image:url(${iconSprite})"
    ></span>`;
  }

  static styles = css`
    :host {
      --size: 3rem;
    }
    .icon {
      display: inline-block;
      width: var(--size);
      height: var(--size);
    }
    .icon.none {
    }
    .icon.check {
      background-position: calc(-1 * var(--size)) 0rem;
    }
    .icon.arrow-back {
      background-position: calc(-2 * var(--size)) 0rem;
    }
  `;
}
