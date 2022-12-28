import { LitElement } from "lit";
import Channel from "@/classes/Channel";
import type CopyState from "@/types/CopyState";
import type Copy from "@/types/Copy";
import "@/components/FilledCard";
export default class CopyList extends LitElement {
    #private;
    copyChannel: Channel<CopyState>;
    copyList: Copy[];
    constructor();
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
