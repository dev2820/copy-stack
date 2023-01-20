import { LitElement } from "lit";
import "@/components/FilledCard";
import "@/components/FilledButton";
import "@/components/TextButton";
import "@/components/CopyMenu";
export default class FaviconImg extends LitElement {
    #private;
    domain: string;
    size: number;
    $favicon: HTMLImageElement;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
