import { LitElement, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";

import "@/components/CopyList";

@customElement("copy-stack")
export default class CopyList extends LitElement {
  constructor() {
    super();
    this.#created();
  }
  render() {
    return html`<copy-list></copy-list>`;
  }

  async #created() {}

  static styles = css``;
}
