import { Story, Meta } from "@storybook/web-components";
import "@/components/TextButton";
declare const _default: Meta<import("@storybook/web-components").Args>;
export default _default;
type Args = {
    content: string;
    theme?: string;
};
export declare const Default: Story<Args>;
export declare const Alert: Story<Args>;
