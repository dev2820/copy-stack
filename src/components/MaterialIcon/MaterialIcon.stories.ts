import { Story, Meta } from "@storybook/web-components";
import { html } from "lit-html";
import * as ICON_SIZE from "@/constants/ICON_SIZE";
import type IconSize from "@/types/IconSize";
import "@/components/MaterialIcon";

export default {
  title: "MaterialIcon",
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Llbx0pdb3UJZe8khrDHrEQ/Design?node-id=274%3A937&t=QGzmpvrhxLtkgNt2-1",
    },
  },
  argTypes: {
    size: {
      options: ICON_SIZE,
      control: { type: "radio" },
    },
  },
} as Meta;

type Args = {
  icon: string;
  size: IconSize;
};

const Template: Story<Args> = (args: Args) =>
  html`<material-icon size="${args.size}" icon="${args.icon}"></material-icon>`;

export const Empty = Template.bind({});
Empty.args = {
  icon: "",
  size: ICON_SIZE.SMALL,
};

export const Check = Template.bind({});
Check.args = {
  icon: "check",
  size: ICON_SIZE.SMALL,
};

export const ArrowBack = Template.bind({});
ArrowBack.args = {
  icon: "arrow-back",
  size: ICON_SIZE.SMALL,
};
