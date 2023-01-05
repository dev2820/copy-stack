import { Story, Meta } from "@storybook/web-components";
import { TemplateResult } from "lit-html";
import "@/components/CopiedItem";
import "@/components/FilledCard";
declare const _default: Meta<import("@storybook/web-components").Args>;
export default _default;
type Args = {
    content: string | TemplateResult<1>;
};
export declare const Empty: Story<Args>;
export declare const Text: Story<Args>;
export declare const Image: Story<Args>;
export declare const TextCopy: Story<Args>;
export declare const ImageCopy: Story<Args>;
