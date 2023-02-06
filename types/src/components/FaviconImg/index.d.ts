import { LitElement } from "lit";
export default class FaviconImg extends LitElement {
    #private;
    domain: string;
    size: number;
    $favicon: HTMLImageElement;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
