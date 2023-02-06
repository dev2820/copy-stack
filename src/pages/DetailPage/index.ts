import { LitElement, css, html } from "lit";
import { customElement,state } from "lit/decorators.js";
import { type ChannelAddress, Radio, Action } from "broadcasting";
import type Copy from '@/types/Copy';
import type Entity from '@/types/Entity';
import type CopyEvent from "@/types/CopyEvent";
import type DeleteCopyEvent from "@/types/DeleteCopyEvent";
import router from "@/modules/router";
import Messenger from "@/modules/Messenger";
import clipboardSystem from "@/modules/clipboardSystem";
import EVENT from "@/constants/EVENT";
import COPY from "@/constants/stores/COPY";
import RUNTIME_MESSAGE from "@/constants/RUNTIME_MESSAGE";
import DETAIL_PAGE from "@/constants/DETAIL_PAGE";
import * as ICON_SIZE from "@/constants/ICON_SIZE";
import * as ICON_NAME from "@/constants/ICON_NAME";

import "@/components/MaterialIcon";
import "@/components/CopyDetail";
import "@/components/CopyMenu";

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
    this.#initEvents();
    this.#initValues();
  }

  render() {
    return html`
    <header>
      <material-icon 
        class="leading-navigation" 
        size="${ICON_SIZE.MEDIUM}" 
        icon="${ICON_NAME.ARROW_BACK}"
        @click="${this.goBack}"
      ></material-icon>
      <h2 class="title">${DETAIL_PAGE.CONTENT.TITLE}</h2>
    </header>
    <section>
      <copy-detail .copy="${this.targetCopy}"></copy-detail>
    </section>
    <footer>
      <copy-menu .copy="${this.targetCopy}"></copy-menu>
    </footer>
    `

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

  goBack() {
    router.back()
  }

  #initEvents() {
    this.addEventListener(EVENT.CLICK_COPY,(evt:CopyEvent)=>{
      if(!evt.detail) return;
      this.#copy2Clipboard(evt.detail.copy)
    })

    this.addEventListener(EVENT.DELETE_COPY,(evt:DeleteCopyEvent)=>{
      if(!evt.detail) return;
      this.#deleteCopy(evt.detail.index)
    })
  }

  #deleteCopy(index:number) {
    this.goBack();
    
    const addCopyAction = new Action(COPY.ACTION_TYPES.DELETE_COPY,index);
    this.copyRadio.broadcastAction(addCopyAction)
  }

  #copy2Clipboard(copy:Entity<Copy>) {
    clipboardSystem.toClipboard(copy.content);
  }

  static styles = css`
    :host{
      width:100%;
      height:100%;
      display:flex;
      flex-direction:column;
    }
    header {
      box-sizing:border-box;
      height: 3.5rem;
      padding:1rem 0.5rem;
      display:flex;
      border-bottom: 2px solid var(--boundary-color);
      flex-direction:row;
    }
    header h2.title {
      line-height:2rem;
      margin:0;
      font-size: 1.5rem;
      font-weight: bold;
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
      padding: 0.5rem;
    }
    footer {
      width:100%;
      height:3rem;
      box-sizing:border-box;
      padding:0 1rem;
      position:relative;
      z-index:100;
      bottom:0;
      flex-shrink:0;
      display:flex;
      flex-direction:column;
      background-color:var(--surface-color);
    }
    footer > copy-menu {
      margin:auto 0;
    }
  `;
}
