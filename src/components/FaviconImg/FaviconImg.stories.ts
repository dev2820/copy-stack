import { Story, Meta } from "@storybook/web-components";
import { html } from "lit-html";

import "@/components/FaviconImg";

export default {
  title: "FaviconImg",
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Llbx0pdb3UJZe8khrDHrEQ/Design?node-id=426%3A1656&t=eco9cPBdpK39Se6o-1",
    },
  },
} as Meta;

type Args = {
  domain: string;
  size: number;
};

const Template: Story<Args> = (args: Args) =>
  html`<favicon-img .domain=${args.domain} .size=${args.size}></favicon-img>`;

export const NoImage = Template.bind({});
NoImage.args = {
  domain: "",
  size: 32,
};

export const LoremIpsum = Template.bind({});
LoremIpsum.args = {
  domain: "https://lipsum.com",
  size: 32,
};
