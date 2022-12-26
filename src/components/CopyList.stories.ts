import { Meta } from "@storybook/web-components";
import { html } from "lit-html";
import "@/components/CopyList";

export default {
  title: "CopyList",
} as Meta;

const Template = ({ copies }) => html`<copy-list>Hello World!!!!</copy-list>`;

export const Default = Template.bind({});
Default.args = {
  copies: ["a", "b", "c"],
};
