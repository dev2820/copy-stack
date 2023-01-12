import { LitElement, css, html } from "lit";
import { customElement, state, property } from "lit/decorators.js";
import Messenger from "@/modules/Messenger";
import router from '@/modules/router';
import type Copy from "@/types/Copy";
import type Entity from "@/types/Entity";
import type DeleteCopyEvent from "@/types/DeleteCopyEvent";
import { type ChannelAddress, Radio, Action } from "broadcasting";
import EVENT from "@/constants/EVENT";
import RUNTIME_MESSAGE from "@/constants/RUNTIME_MESSAGE";
import COPY from "@/constants/stores/COPY";
import type Filter from "@/types/Filter";

import "@/components/FilledCard";
import "@/components/CopiedItem";
import "@/components/CopyListEmpty"

@customElement("copy-list")
export default class CopyList extends LitElement {
  @state()
  copyRadio!: Radio;

  @state()
  copyList: Entity<Copy>[] = [];

  @property({type: Array})
  filter: Filter = [];

  constructor() {
    super();
    this.#created();
  }
  render() {
    return html`
    ${
      this.copyList.length > 0 ?
      html`<ul class="copy-list" reversed>
      ${this.#filterCopy(this.copyList).map(
        (copy) =>
          html` <li class="item">
            <filled-card class="card">
              <copied-item .copy=${copy} data-id="${copy.id}" @click="${()=>this.goToDetail(copy.id)}"></copied-item>
            </filled-card>
          </li>`
      )}
    </ul>`
    : html`
      <copy-list-empty></copy-list-empty>
    `
    }`;
  }

  async #created() {
    this.#initEvents();
    this.#initValues();
  }

  #initEvents() {
    this.addEventListener(EVENT.DELETE_COPY,(evt:DeleteCopyEvent)=>{
      if(!evt.detail) return;
      this.#deleteCopy(evt.detail.index)
    })
  }

  async #initValues() {
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

  #deleteCopy(index:number) {
    const addCopyAction = new Action(COPY.ACTION_TYPES.DELETE_COPY,index);
    this.copyRadio.broadcastAction(addCopyAction)
  }

  #filterCopy(copyList:Entity<Copy>[]):Entity<Copy>[] {
    return copyList.filter(c=>this.filter.includes(c.type))
  }

  goToDetail(id:number) {
    router.go(`/${id}`)
  }

  static styles = css`
    :host {
      width:100%;
      height:100%;
      box-sizing: border-box;
      margin: 0 auto;
      text-align: center;
    }

    ul {
      list-style: none;
      padding: 0;
      margin:0;
      width: 100%;
      display:flex;
      flex-direction:column-reverse;
    }
    ul > li {
      margin-bottom: 0.5rem;
      cursor:pointer;
    }
  `;
}
