import { Story, Meta } from "@storybook/web-components";
import { html, TemplateResult } from "lit-html";
import copyList from "@mocks/copyList";
import "@/components/TextCopy";
import "@/components/ImageCopy";
import "@/components/FilledCard";

const noImageUrl = new URL("@/assets/images/no-image.png", import.meta.url)
  .href;
const textCopyMock = copyList[0];
const ImageCopyMock = copyList[1];

export default {
  title: "FilledCard",
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Llbx0pdb3UJZe8khrDHrEQ/Design?node-id=73%3A930&t=Q3Rvtrc69Xc3Cc8f-1",
    },
  },
} as Meta;

type Args = {
  content: string | TemplateResult<1>;
};

const Template: Story<Args> = (args: Args) =>
  html`<filled-card>${args.content}</filled-card>`;

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
export const TextCopy = Template.bind({});
TextCopy.args = {
  content: html`<text-copy .copy=${textCopyMock}></text-copy>`,
};
export const ImageCopy = Template.bind({});
ImageCopy.args = {
  content: html`<image-copy .copy=${ImageCopyMock}></image-copy>`,
};
