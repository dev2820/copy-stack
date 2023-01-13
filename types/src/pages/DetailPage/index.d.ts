import { LitElement } from "lit";
import { Radio } from "broadcasting";
import type Copy from '@/types/Copy';
import "@/components/MaterialIcon";
import "@/components/CopyDetail";
import "@/components/CopyMenu";
export default class DetailPage extends LitElement {
    #private;
    copyRadio: Radio;
    targetCopy: Copy | null;
    copyId: number;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
    goBack(): void;
    static styles: import("lit").CSSResult;
}
