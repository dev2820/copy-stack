import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import router from "@/modules/router";

@customElement("page-router")
export default class PageRouter extends LitElement {
  constructor() {
    super();

    router.subscribe(() => {
      this.requestUpdate();
    });
  }
  render() {
    if (router.location.currentPage) {
      return router.location.currentPage();
    }

    return html`Error: Router failed to find page`;
  }

  static styles = css`
    :host {
      text-align: center;
    }
  `;
}