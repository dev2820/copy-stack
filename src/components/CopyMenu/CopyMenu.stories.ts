import { Story, Meta } from "@storybook/web-components";
import { html } from "lit-html";

import "@/components/CopyMenu";

export default {
  title: "CopyMenu",
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Llbx0pdb3UJZe8khrDHrEQ/Design?node-id=15%3A580&t=cYDG44EMyrC3N5nJ-1",
    },
  },
} as Meta;

const Template: Story = () => html`<copy-menu></copy-menu>`;

export const Default = Template.bind({});
