import { Story, Meta } from "@storybook/web-components";
import "@/components/FaviconImg";
declare const _default: Meta<import("@storybook/web-components").Args>;
export default _default;
type Args = {
    domain: string;
    size: number;
};
export declare const NoImage: Story<Args>;
export declare const LoremIpsum: Story<Args>;
