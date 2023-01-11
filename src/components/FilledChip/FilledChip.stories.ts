import { Story, Meta } from "@storybook/web-components";
import { html, TemplateResult } from "lit-html";

import "@/components/FilledChip";

export default {
  title: "FilledChip",
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Llbx0pdb3UJZe8khrDHrEQ/Design?node-id=31%3A711&t=QGzmpvrhxLtkgNt2-1",
    },
  },
} as Meta;

type Args = {
  content: string | TemplateResult<1>;
  checked: boolean;
};

const Template: Story<Args> = (args: Args) =>
  html`<filled-chip ?checked="${args.checked}">${args.content}</filled-chip>`;

export const Empty = Template.bind({});
Empty.args = {
  content: "",
};

export const Text = Template.bind({});
Text.args = {
  content: "Lorem Ipsum",
};

export const CheckedText = Template.bind({});
CheckedText.args = {
  content: "Lorem Ipsum",
  checked: true,
};
