import { LitElement, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import FILTER_OPTIONS from "@/constants/FILTER_OPTIONS";

import "@/components/FilledCard";
import "@/components/FilledButton";
import "@/components/TextButton";

@customElement("copy-filter")
export default class CopiedItem extends LitElement {
  @state()
  filterOptions = FILTER_OPTIONS;

  constructor() {
    super();
  }

  render() {
    return html`
      <menus>
        ${this.filterOptions.map((filter) => {
          return html`<input type="checkbox" checked="${filter.checked}">${filter.name}</input>`;
        })}
      </menus>
    `;
  }

  static styles = css``;
}
