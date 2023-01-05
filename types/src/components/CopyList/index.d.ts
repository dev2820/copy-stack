import { LitElement } from "lit";
import type Copy from "@/types/Copy";
import { Radio } from "broadcasting";
import "@/components/FilledCard";
import "@/components/CopiedItem";
export default class CopyList extends LitElement {
    #private;
    copyRadio: Radio;
    copyList: Copy[];
    constructor();
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
