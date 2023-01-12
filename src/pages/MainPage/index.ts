import { LitElement, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import type FilterChangeEvent from "@/types/FilterChangeEvent";
import type Filter from "@/types/Filter";
import FILTER_OPTIONS from "@/constants/FILTER_OPTIONS";
import EVENT from "@/constants/EVENT";

import "@/components/CopyList";
import "@/components/CopyFilter";

@customElement("main-page")
export default class MainPage extends LitElement {
  @state()
  filter: Filter = [];

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
  }

  #initValues() {
    this.filter = FILTER_OPTIONS.filter((f) => f.checked).map(
      (filter) => filter.name
    );
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      width: var(--screen-width);
      height: var(--screen-height);
    }
    header {
      padding: 1rem 0.5rem;
      border-bottom: 2px solid var(--boundary-color);
      z-index: 10;
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
  `;
}
