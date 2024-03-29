import { Story, Meta } from "@storybook/web-components";
import type Filter from "@/types/Filter";
import "@/components/CopyList";
declare const _default: Meta<import("@storybook/web-components").Args>;
export default _default;
type Args = {
    filter: Filter;
};
export declare const Default: Story<Args>;
export declare const Empty: Story<Args>;
