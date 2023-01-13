import { LitElement } from "lit";
import type Entity from "@/types/Entity";
import type Copy from "@/types/Copy";
import "@/components/FilledCard";
import "@/components/FilledButton";
import "@/components/TextButton";
import "@/components/CopyMenu";
export default class CopiedItem extends LitElement {
    #private;
    copy: Entity<Copy>;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
