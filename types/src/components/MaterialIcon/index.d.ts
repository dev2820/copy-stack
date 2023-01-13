import { LitElement } from "lit";
import type IconSize from "@/types/IconSize";
import type IconName from "@/types/IconName";
export default class FilledChip extends LitElement {
    icon: IconName;
    size: IconSize;
    render(): import("lit-html").TemplateResult<1>;
    getSprite(): string;
    static styles: import("lit").CSSResult;
}
