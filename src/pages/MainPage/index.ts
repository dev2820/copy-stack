import { LitElement, css, html } from "lit";
import { customElement, state, query } from "lit/decorators.js";
import type FilterChangeEvent from "@/types/FilterChangeEvent";
import type CopyCompleteEvent from "@/types/CopyCompleteEvent";
import type Filter from "@/types/Filter";
import FILTER_OPTIONS from "@/constants/FILTER_OPTIONS";
import COPY_STATE from "@/constants/COPY_STATE";
import EVENT from "@/constants/EVENT";

import "@/components/CopyList";
import "@/components/CopyFilter";

@customElement("main-page")
export default class MainPage extends LitElement {
  @state()
  filter: Filter = [];

  @state()
  copyStateMessage = COPY_STATE.MESSAGE.SUCCESS;

  @query("span.alert")
  $alert!: HTMLElement | null;

  constructor() {
    super();
    this.#created();
  }
  render() {
    return html`
      <header>
        <h1 id="title">Copy Stack</h1>
        <copy-filter .options=${FILTER_OPTIONS}></copy-filter>
      </header>
      <section>
        <copy-list .filter=${this.filter}></copy-list>
      </section>
      <span class="alert">${this.copyStateMessage}</span>
    `;
  }

  async #created() {
    this.#initEvents();
    this.#initValues();
  }

  #initEvents() {
    this.addEventListener(EVENT.FILTER_CHANGE, (evt: FilterChangeEvent) => {
      if (!evt.detail) return;
      this.filter = evt.detail.filter;
    });
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

  #initValues() {
    this.filter = FILTER_OPTIONS.filter((f) => f.checked).map(
      (filter) => filter.name
    );
  }

  #handleCopySuccess() {
    this.copyStateMessage = COPY_STATE.MESSAGE.SUCCESS;
    if (!this.$alert) return;

    this.$alert.classList.add("action");
    setTimeout(() => {
      if (!this.$alert) return;

      this.$alert.classList.remove("action");
    }, 2000);
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
      display: flex;
      flex-direction: column;
      width: var(--screen-width);
      height: var(--screen-height);
      overflow: hidden;
    }
    header {
      padding: 1rem 0.5rem;
      border-bottom: 2px solid var(--boundary-color);
    }
    header > #title {
      margin: 0;
      font-size: 1.5rem;
      font-weight: bold;
    }
    section {
      padding: 0.5rem;
      overflow-y: scroll;
      overflox-x: hidden;
      flex-grow: 1;
    }

    .alert {
      position: absolute;
      width: 160px;
      height: 2rem;
      bottom: 1rem;
      left: 50%;
      text-align: center;
      background: black;
      will-change: true;
      transform: translateX(-50%) translateY(400%);
      transition: transform 0.2s ease-in;
    }
    .alert.action {
      transform: translateX(-50%) translateY(0);
    }
  `;
}
