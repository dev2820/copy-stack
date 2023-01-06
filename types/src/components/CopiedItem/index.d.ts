import { LitElement } from "lit";
import type Copy from "@/types/Copy";
import "@/components/FilledCard";
import "@/components/FilledButton";
import "@/components/TextButton";
export default class CopiedItem extends LitElement {
    #private;
    copy: Copy;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
