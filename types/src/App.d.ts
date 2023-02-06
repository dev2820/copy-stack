import { LitElement } from "lit";
import "@/components/PageTransition";
import "@/pages/MainPage";
import "@/pages/DetailPage";
export default class CopyStack extends LitElement {
    #private;
    options: Array<any>;
    copyStateMessage: string;
    $alert: HTMLElement | null;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
