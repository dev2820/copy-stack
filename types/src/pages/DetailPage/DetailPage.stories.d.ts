import { Story, Meta } from "@storybook/web-components";
import "@/pages/DetailPage";
declare const _default: Meta<import("@storybook/web-components").Args>;
export default _default;
type Args = {
    id: string;
    parameters: {
        design: Record<string, string>;
        store: Record<string, object>;
    };
};
export declare const TextDetail: Story<Args>;
export declare const ImageDetail: Story<Args>;