import { LitElement } from "lit";
import type Entity from "@/types/Entity";
import type Copy from "@/types/Copy";
import "@/components/FilledCard";
import "@/components/TextButton";
import "@/components/CopyMenu";
import "@/components/FaviconImg";
export default class CopiedItem extends LitElement {
    #private;
    copy: Entity<Copy>;
    size: number;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
    metaInfoRender(): import("lit-html").TemplateResult<1>;
    sourceInfoRender(): import("lit-html").TemplateResult<1>;
    summaryRender(): "" | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
