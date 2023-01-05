import { Story, Meta } from "@storybook/web-components";
import { html } from "lit-html";
import "@/components/TextButton";

export default {
  title: "TextButton",
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Llbx0pdb3UJZe8khrDHrEQ/Design?node-id=26%3A530&t=FUABwV6U3a3pkgI1-1",
    },
  },
} as Meta;

type Args = {
  content: string;
  theme?: string;
};

const Template: Story<Args> = (args: Args) =>
  html`<text-button theme=${args.theme}>${args.content}</text-button>`;

export const Default = Template.bind({});
Default.args = {
  content: "copy",
};

export const Alert = Template.bind({});
Alert.args = {
  content: "copy",
  theme: "alert",
};
