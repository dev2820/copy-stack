import { Story, Meta } from "@storybook/web-components";
import type IconSize from "@/types/IconSize";
import "@/components/MaterialIcon";
declare const _default: Meta<import("@storybook/web-components").Args>;
export default _default;
type Args = {
    icon: string;
    size: IconSize;
};
export declare const Empty: Story<Args>;
export declare const Check: Story<Args>;
export declare const ArrowBack: Story<Args>;
export declare const Calender: Story<Args>;
export declare const Text: Story<Args>;
export declare const Image: Story<Args>;
export declare const Globe: Story<Args>;
