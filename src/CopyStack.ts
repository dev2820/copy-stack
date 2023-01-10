import { LitElement, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import type FilterChangeEvent from "@/types/FilterChangeEvent";
import FILTER_OPTIONS from "@/constants/FILTER_OPTIONS";
import "@/components/CopyList";
import "@/components/CopyFilter";

@customElement("copy-stack")
export default class CopyList extends LitElement {
  @state()
  filters: string[] = [];

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
        <copy-list .filter=${this.filters}></copy-list>
      </section>
    `;
  }

  async #created() {
    this.#initEvent();
    this.#initValues();
  }

  #initEvent() {
    this.addEventListener("filterchange", (evt: FilterChangeEvent) => {
      if (!evt.detail) return;
      this.filters = evt.detail.filters;
    });
  }

  #initValues() {
    this.filters = FILTER_OPTIONS.filter((f) => f.checked).map(
      (filter) => filter.name
    );
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
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
      overflow: scroll;
    }
  `;
}