import { Story, Meta } from "@storybook/web-components";
import "@/CopyStack";
declare const _default: Meta<import("@storybook/web-components").Args>;
export default _default;
type Args = {
    parameters: {
        design: Record<string, string>;
        store: Record<string, object>;
    };
};
export declare const Default: Story<Args>;
