import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import createDeleteCopyEvent from "@/utils/event/createDeleteCopyEvent";
import createCopyEvent from "@/utils/event/createCopyEvent";
import type Copy from "@/types/Copy";
import type Entity from "@/types/Entity";
import COPY_MENU from "@/constants/COPY_MENU";

import "@/components/FilledButton";
import "@/components/TextButton";

@customElement("copy-menu")
export default class CopyMenu extends LitElement {
  @property({ type: Object, reflect: true })
  copy!: Entity<Copy>;

  constructor() {
    super();
  }

  render() {
    return html`
      <menu type="list">
        <filled-button theme="primary" @click=${this.#handleCopy}>
          ${COPY_MENU.CONTENT.COPY}
        </filled-button>
        <text-button theme="alert" @click=${this.#deleteCopy}>
          ${COPY_MENU.CONTENT.DELETE}
        </text-button>
      </menu>
    `;
  }
  #handleCopy() {
    const copyEvent = createCopyEvent(this.copy);
    this.dispatchEvent(copyEvent);
  }
  #deleteCopy() {
    const deleteCopyEvent = createDeleteCopyEvent(this.copy.id);
    this.dispatchEvent(deleteCopyEvent);
  }

  static styles = css`
    menu[type="list"] {
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: row-reverse;
      gap: 0.75rem;
    }
    menu[type="list"] > * {
      margin: auto 0;
    }
  `;
}
