import { LitElement } from "lit";
import type Filter from "@/types/Filter";
import "@/components/CopyList";
import "@/components/CopyFilter";
export default class CopyList extends LitElement {
    #private;
    filter: Filter;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
