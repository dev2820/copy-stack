import { LitElement } from "lit";
import type Copy from "@/types/Copy";
import type Entity from "@/types/Entity";
import "@/components/FilledButton";
import "@/components/TextButton";
export default class CopyMenu extends LitElement {
    #private;
    copy: Entity<Copy>;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
