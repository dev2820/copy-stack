import { Story, Meta } from "@storybook/web-components";
import { TemplateResult } from "lit-html";
import "@/App";
declare const _default: Meta<import("@storybook/web-components").Args>;
export default _default;
type Args = {
    content: string | TemplateResult<1>;
    checked: boolean;
};
export declare const Default: Story<Args>;
