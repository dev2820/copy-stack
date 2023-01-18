import { Story, Meta } from "@storybook/web-components";
import { html } from "lit-html";
import FILTER_OPTIONS from "@/constants/FILTER_OPTIONS";

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

const Template: Story = () =>
  html`<copy-filter .options=${FILTER_OPTIONS}></copy-filter>`;

export const Default = Template.bind({});
