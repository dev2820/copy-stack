import { Meta } from "@storybook/web-components";
import { html } from "lit-html";
import "@/components/FilledCard";

const noImageUrl = new URL("@/assets/images/no-image.png", import.meta.url)
  .href;
export default {
  title: "FilledCard",
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Llbx0pdb3UJZe8khrDHrEQ/Design?node-id=73%3A930&t=Q3Rvtrc69Xc3Cc8f-1",
    },
  },
} as Meta;

const Template = ({ content }) => html`<filled-card>${content}</filled-card>`;
export const Empty = Template.bind({});
Empty.args = {
  content: "",
};

export const Text = Template.bind({});
Text.args = {
  content: "Lorem Ipsum",
};

export const Image = Template.bind({});
Image.args = {
  content: html`<img src="${noImageUrl}" />`,
};