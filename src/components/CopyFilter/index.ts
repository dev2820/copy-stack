import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import createFilterChangeEvent from "@/utils/event/createFilterChangeEvent";

import "@/components/FilledCard";
import "@/components/FilledButton";
import "@/components/TextButton";
import "@/components/FilledChip";

@customElement("copy-filter")
export default class CopyFilter extends LitElement {
  @property({ type: Array })
  options!: Array<any>;

  constructor() {
    super();
  }

  render() {
    return html`
      <menus @change=${this.#filterChangeHandler}>
        ${this.options.map((filter: any, index: number) => {
          return html`
            <filled-chip data-index="${index}" .checked="${filter.checked}">
              ${filter.name}
            </filled-chip>
          `;
        })}
      </menus>
    `;
  }
  #filterChangeHandler(evt: Event) {
    const $filter = evt.target as HTMLInputElement;
    if (!$filter || !$filter.dataset["index"]) return;

    const index = parseInt($filter.dataset["index"], 10);
    const isChecked = $filter.checked;
    this.options[index].checked = isChecked;

    this.dispatchEvent(
      createFilterChangeEvent(
        this.options.filter((f) => f.checked).map((f) => f.name)
      )
    );
  }

  static styles = css``;
}
