import { Story, Meta } from "@storybook/web-components";
import { html } from "lit-html";

import "@/components/MaterialIcon";

export default {
  title: "MaterialIcon",
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Llbx0pdb3UJZe8khrDHrEQ/Design?node-id=274%3A937&t=QGzmpvrhxLtkgNt2-1",
    },
  },
} as Meta;

type Args = {
  icon: string;
};

const Template: Story<Args> = (args: Args) =>
  html`<material-icon icon="${args.icon}"></material-icon>`;

export const Empty = Template.bind({});
Empty.args = {
  icon: "",
};

export const Check = Template.bind({});
Check.args = {
  icon: "check",
};
