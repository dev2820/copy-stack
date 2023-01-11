import { Story, Meta } from "@storybook/web-components";
import { html } from "lit-html";

import "@/components/CopyFilter";

export default {
  title: "CopyFilter",
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Llbx0pdb3UJZe8khrDHrEQ/Design?node-id=42%3A920&t=okNG2IhYjbxo6hkR-1",
    },
  },
} as Meta;

const Template: Story = () => html`<copy-filter></copy-filter>`;

export const Default = Template.bind({});
