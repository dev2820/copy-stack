import { LitElement, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import Messenger from "@/classes/Messenger";
import Channel from "@/classes/Channel";
import type CopyState from "@/types/CopyState";
import type Copy from "@/types/Copy";

@customElement("copy-list")
export default class CopyList extends LitElement {
  @state()
  copyChannel!: Channel<CopyState>;

  @state()
  copyList: Copy[] = [];

  constructor() {
    super();
    this.created();
  }
  render() {
    return html`
      <ul class="copy-list">
        ${this.copyList.map(
          (copy) =>
            html`<li><filled-card class="card">${copy}</filled-card></li>`
        )}
      </ul>
    `;
  }

  async created() {
    this.copyChannel = await Messenger.sendMessage("getChannel");
    this.copyList = [...this.copyChannel.$state.copyList];
  }

  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    ul {
      list-style: none;
      padding: 0;
    }
    ul > li {
      margin-bottom: 0.5rem;
    }
  `;
}
