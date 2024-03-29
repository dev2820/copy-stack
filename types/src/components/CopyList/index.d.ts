import { LitElement } from "lit";
import type Copy from "@/types/Copy";
import type Entity from "@/types/Entity";
import { Radio } from "broadcasting";
import type Filter from "@/types/Filter";
import "@/components/FilledCard";
import "@/components/CopiedItem";
import "@/components/CopyListEmpty";
export default class CopyList extends LitElement {
    #private;
    copyRadio: Radio;
    copyList: Entity<Copy>[];
    filter: Filter;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
