import { LitElement, css, html } from "lit";
import { customElement,state } from "lit/decorators.js";
import { type ChannelAddress, Radio } from "broadcasting";
import type Copy from '@/types/Copy';
import type Entity from '@/types/Entity';
import router from "@/modules/router";
import Messenger from "@/modules/Messenger";
import RUNTIME_MESSAGE from "@/constants/RUNTIME_MESSAGE";
import * as ICON_SIZE from "@/constants/ICON_SIZE";

import "@/components/MaterialIcon";
import "@/components/CopyDetail";

@customElement("detail-page")
export default class DetailPage extends LitElement {
  @state()
  copyRadio!: Radio;

  @state()
  targetCopy: Copy|null = null;

  @state()
  copyId:number = -1;

  constructor() {
    super();
    this.#initValues();
  }

  render() {
    return html`
    <header>
      <material-icon 
        class="leading-navigation" 
        size="${ICON_SIZE.MEDIUM}" 
        icon="arrow-back"
        @click="${this.goToMain}"
      ></material-icon>
      <h2 class="title">details</h2>
    </header>
    <section>
      <copy-detail .copy="${this.targetCopy}"></copy-detail>
    </section>`
  }

  async #initValues() {
    this.copyId = parseInt(router.location.params.id,10)
    const channelAddress = (await Messenger.sendMessage({
      type:RUNTIME_MESSAGE.GET_CHANNEL_ADDRESS
    })) as ChannelAddress;

    this.copyRadio = new Radio(
      {sender:channelAddress.receiver,receiver:channelAddress.sender},
      (initialState: Record<string, any>) => {
        const targetCopy = initialState.copyList.find((copy:Entity<Copy>)=>copy.id === this.copyId)
        this.targetCopy = targetCopy;
      }
    );
    this.copyRadio.$subscribe((newState: Record<string, any>) => {
      const targetCopy = newState.copyList.find((copy:Entity<Copy>)=>copy.id === this.copyId)
      this.targetCopy = targetCopy;
    });

    router.subscribe(()=>{
      this.copyId = parseInt(router.location.params.id,10);
      const copyList = this.copyRadio.$state.copyList
      this.targetCopy = copyList.find((copy:Entity<Copy>)=>copy.id === this.copyId)
    })
  }

  goToMain() {
    router.go("/")
  }

  static styles = css`
    :host{
      width: var(--screen-width);
      height: var(--screen-height);
      display:flex;
      flex-direction:column;
    }
    header {
      box-sizing:border-box;
      height: 3.5rem;
      padding:0.5rem;
      display:flex;
      flex-direction:row;
    }
    header h2.title {
      line-height:2.5rem;
      margin:0;
      user-select:none;
    }
    header .leading-navigation {
      margin:auto 0;
      width:2rem;
      height:2rem;
      margin-right:1rem;
      cursor:pointer;
    }
    section {
      overflow-y:scroll;
      flex-grow:1;
    }
  `;
}
