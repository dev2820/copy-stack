import { LitElement, css, html } from "lit";
import { customElement, query } from "lit/decorators.js";
import router from "@/modules/router";

@customElement("page-transition")
export default class PageTransition extends LitElement {
  @query(".slider")
  $slider!: HTMLElement | null;

  constructor() {
    super();
    router.subscribe(() => {
      if (!this.$slider) return;

      if (
        router.route.lastOrder === "go" &&
        !this.$slider.classList.contains("right")
      ) {
        this.$slider.classList.toggle("right");
      }

      if (
        router.route.lastOrder === "back" &&
        this.$slider.classList.contains("right")
      ) {
        this.$slider.classList.toggle("right");
      }
    });
  }
  render() {
    return html`
      <div class="viewport">
        <div class="slider">
          <div class="main-page">
            <slot name="main"></slot>
          </div>
          <div class="right-page">
            <slot name="right"></slot>
          </div>
        </div>
      </div>
    `;
  }

  static styles = css`
    .viewport {
      width: var(--screen-width);
      height: var(--screen-height);
      overflow: hidden;
    }
    .slider {
      width: calc(2 * var(--screen-width));
      height: var(--screen-height);
      display: flex;
      flex-direction: row;
      transition: 0.3s;
    }
    .slider.right {
      transform: translateX(calc(-1 * var(--screen-width)));
    }
    .main-page,
    .right-page {
      width: var(--screen-width);
      height: var(--screen-height);
    }
  `;
}
