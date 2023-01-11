import { Story, Meta } from "@storybook/web-components";
import { TemplateResult } from "lit-html";
import "@/components/FilledChip";
declare const _default: Meta<import("@storybook/web-components").Args>;
export default _default;
type Args = {
    content: string | TemplateResult<1>;
    checked: boolean;
};
export declare const Empty: Story<Args>;
export declare const Text: Story<Args>;
export declare const CheckedText: Story<Args>;
