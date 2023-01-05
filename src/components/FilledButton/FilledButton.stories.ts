import { Story, Meta } from "@storybook/web-components";
import { html } from "lit-html";
import "@/components/FilledButton";

export default {
  title: "FilledButton",
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Llbx0pdb3UJZe8khrDHrEQ/Design?node-id=26%3A533&t=60paBAw74QV0grHF-1",
    },
  },
} as Meta;

type Args = {
  content: string;
  theme?: string;
};

const Template: Story<Args> = (args: Args) =>
  html`<filled-button theme=${args.theme}>${args.content}</filled-button>`;

export const Default = Template.bind({});
Default.args = {
  content: "copy",
};

export const Primary = Template.bind({});
Primary.args = {
  content: "copy",
  theme: "primary",
};
