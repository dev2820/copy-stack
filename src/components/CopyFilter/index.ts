import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import "@/components/FilledCard";
import "@/components/FilledButton";
import "@/components/TextButton";

@customElement("copy-filter")
export default class CopiedItem extends LitElement {
  @property({ type: Array })
  options!: Array<any>;

  constructor() {
    super();
  }

  render() {
    return html`
      <menus @change=${this.#filterHandler}>
        ${this.options.map((filter: any, index: number) => {
          return html`
          <input 
            type="checkbox" 
            data-index="${index}"
            checked="${filter.checked}"
          >${filter.name}</input>`;
        })}
      </menus>
    `;
  }

  #filterHandler(evt: Event) {
    const $filter = evt.target as HTMLInputElement;
    if (!$filter || !$filter.dataset["index"]) return;

    const index = parseInt($filter.dataset["index"], 10);
    const isChecked = $filter.checked;
    this.options[index].checked = isChecked;

    this.dispatchEvent(
      new CustomEvent("filterchange", {
        detail: {
          filters: this.options.filter((f) => f.checked).map((f) => f.name),
        },
        composed: true,
      })
    );
  }

  static styles = css``;
}
