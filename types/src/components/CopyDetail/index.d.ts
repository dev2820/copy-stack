import { LitElement } from "lit";
import type Copy from "@/types/Copy";
import type Entity from "@/types/Entity";
export default class CopyDetail extends LitElement {
    copy: Entity<Copy> | null;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
    createDetail(copy: Entity<Copy>): "" | import("lit-html").TemplateResult<1>;
    createTextDetail(copy: Entity<Copy>): import("lit-html").TemplateResult<1>;
    createImageDetail(copy: Entity<Copy>): import("lit-html").TemplateResult<1>;
    createMetaData(copy: Entity<Copy>): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
