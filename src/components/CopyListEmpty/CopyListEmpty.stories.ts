import { Story, Meta } from "@storybook/web-components";
import { html } from "lit-html";

import "@/components/CopyListEmpty";
export default {
  title: "CopyListEmpty",
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Llbx0pdb3UJZe8khrDHrEQ/Design?node-id=30%3A604&t=kuuXkfn1sBvFfiHY-1",
    },
  },
} as Meta;

const Template: Story = () => html`<copy-list-empty></copy-list-empty>`;

export const Default = Template.bind({});
