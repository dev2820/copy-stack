import { LitElement, css, html } from "lit";
import { customElement, property, state, query } from "lit/decorators.js";
import EVENT from "@/constants/EVENT";
import COPY_STATE from "@/constants/COPY_STATE";
import type CopyCompleteEvent from "@/types/CopyCompleteEvent";

import "@/components/PageTransition";
import "@/pages/MainPage";
import "@/pages/DetailPage";

@customElement("copy-stack")
export default class CopyStack extends LitElement {
  @property({ type: Array })
  options!: Array<any>;

  @state()
  copyStateMessage = COPY_STATE.MESSAGE.SUCCESS;

  @query("span.info")
  $alert!: HTMLElement | null;

  constructor() {
    super();
    this.#created();
  }

  async #created() {
    this.#initEvents();
  }

  render() {
    return html`
      <page-transition>
        <main-page slot="main"></main-page>
        <detail-page slot="right"></detail-page>
      </page-transition>
      <span class="info card">${this.copyStateMessage}</span>
    `;
  }

  #initEvents() {
    this.addEventListener(EVENT.COPY_COMPLETE, (evt: CopyCompleteEvent) => {
      if (!evt.detail) return;

      const isSuccess = evt.detail.isSuccess;
      if (isSuccess) {
        this.#handleCopySuccess();
      } else {
        this.#handleCopyFailed();
      }
    });
  }

  #handleCopySuccess() {
    this.copyStateMessage = COPY_STATE.MESSAGE.SUCCESS;
    if (!this.$alert) return;

    this.$alert.classList.add("action");
    setTimeout(() => {
      if (!this.$alert) return;

      this.$alert.classList.remove("action");
    }, 1500);
  }
  #handleCopyFailed() {
    this.copyStateMessage = COPY_STATE.MESSAGE.FAILED;
    if (this.$alert) {
      this.$alert.classList.remove("action");
    }
  }

  static styles = css`
    :host {
      position: absolute;
      overflow: hidden;
      width: var(--screen-width);
      height: var(--screen-height);
    }
    .info {
      position: absolute;
      width: 160px;
      height: 2rem;
      bottom: 2rem;
      left: 50%;
      text-align: center;
      background: var(--info-bg-color);
      line-height: 1.8rem;
      will-change: true;
      border-radius: 999px;
      color: var(--on-placeholder);
      transform: translateX(-50%) translateY(400%);
      transition: transform 0.2s ease-in;
    }
    .info.action {
      transform: translateX(-50%) translateY(0);
    }
    .card {
      box-shadow: var(--card-boxshadow);
    }
  `;
}
