import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import clipboardSystem from "@/modules/clipboardSystem";
import createDeleteCopyEvent from "@/utils/event/createDeleteCopyEvent";
import type Copy from "@/types/Copy";
import type Entity from "@/types/Entity";
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
          copy
        </filled-button>
        <text-button theme="alert" @click=${this.#deleteCopy}>
          delete
        </text-button>
      </menu>
    `;
  }
  #handleCopy() {
    clipboardSystem.toClipboard(this.copy.content);
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
    }
  `;
}