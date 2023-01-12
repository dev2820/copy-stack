import { LitElement, css, html } from "lit";
import { customElement,state } from "lit/decorators.js";
import { type ChannelAddress, Radio } from "broadcasting";
import type Copy from '@/types/Copy';
import type Entity from '@/types/Entity';
import router from "@/modules/router";
import Messenger from "@/modules/Messenger";
import RUNTIME_MESSAGE from "@/constants/RUNTIME_MESSAGE";

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
    router.subscribe(()=>{
      this.copyId = parseInt(router.location.params.id,10);
      const copyList = this.copyRadio.$state.copyList
      this.targetCopy = copyList.find((copy:Entity<Copy>)=>copy.id === this.copyId)
    })
    this.#initValues();
  }

  render() {
    return html`<copy-detail .copy="${this.targetCopy}"></copy-detail>`;
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
  }

  static styles = css``;
}
