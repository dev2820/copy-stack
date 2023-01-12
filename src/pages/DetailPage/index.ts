import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
// import router from "@/modules/router";

import "@/components/CopyDetail";

@customElement("detail-page")
export default class DetailPage extends LitElement {
  constructor() {
    super();
  }
  render() {
    return html`detail`;
  }

  static styles = css``;
}
