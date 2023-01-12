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
    .icon {
      display: inline-block;
      width: 1rem;
      height: 1rem;
    }
    .icon.none {
    }
    .icon.check {
      background-position: -1rem 0rem;
    }
    .icon.arrow-back {
      background-position: -2rem 0rem;
    }
  `;
}
