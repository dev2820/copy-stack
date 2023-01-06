import { Story, Meta } from "@storybook/web-components";
import Copy from "@/types/Copy";
declare const _default: Meta<import("@storybook/web-components").Args>;
export default _default;
type Args = {
    copy: Copy;
};
export declare const TextCopy: Story<Args>;
export declare const ImageCopy: Story<Args>;
