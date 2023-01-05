import { LitElement, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import Messenger from "@/classes/Messenger";
import type Copy from "@/types/Copy";
import type DeleteCopyEvent from "@/types/DeleteCopyEvent";
import EVENT from "@/constants/EVENT";
import RUNTIME_MESSAGE from "@/constants/RUNTIME_MESSAGE";
import { type ChannelAddress, Radio, Action } from "@/modules/broadcast";

import "@/components/FilledCard";
import "@/components/CopiedItem";

@customElement("copy-list")
export default class CopyList extends LitElement {
  @state()
  copyRadio!: Radio;

  @state()
  copyList: Copy[] = [];

  constructor() {
    super();
    this.#created();
  }
  render() {
    return html`
      <button @click=${() => this.#addCopy()}>add copy</button>
      <ul class="copy-list">
        ${this.copyList.map(
          (copy,idx) =>
            html` <li>
              <filled-card class="card">
                <copied-item .copy=${copy} data-index="${idx}"></copied-item>
              </filled-card>
            </li>`
        )}
      </ul>
    `;
  }

  async #created() {
    this.#initEvents();

    const channelAddress = (await Messenger.sendMessage({
      type:RUNTIME_MESSAGE.GET_CHANNEL_ADDRESS
    })) as ChannelAddress;

    this.copyRadio = new Radio(
      {sender:channelAddress.receiver,receiver:channelAddress.sender},
      (initialState: Record<string, any>) => {
        this.copyList = initialState.copyList;
      }
    );
    this.copyRadio.$subscribe((newState: Record<string, any>) => {
      this.copyList = [...newState.copyList];
    });

  }

  #addCopy() {
    const newCopy:Copy = {
      content:this.copyList.length+'',
      created:new Date(),
      source:'localhost'
    }
    const addCopyAction = new Action('addCopy',newCopy);
    this.copyRadio.broadcastAction(addCopyAction)
  }

  #initEvents() {
    this.addEventListener(EVENT.DELETE_COPY,(evt:DeleteCopyEvent)=>{
      if(!evt.detail) return;
      this.#deleteCopy(evt.detail.index)
    })
  }

  #deleteCopy(index:number) {
    const addCopyAction = new Action('deleteCopy',index);
    this.copyRadio.broadcastAction(addCopyAction)
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
