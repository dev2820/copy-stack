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
Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Llbx0pdb3UJZe8khrDHrEQ/Design?node-id=30%3A604&t=Q3Rvtrc69Xc3Cc8f-1",
  },
};
