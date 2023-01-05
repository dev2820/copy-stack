import { Story, Meta } from "@storybook/web-components";
import { html } from "lit-html";
import { textCopyMock, imageCopyMock } from "@mocks/copyList";
import Copy from "@/types/Copy";

export default {
  title: "CopiedItem",
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Llbx0pdb3UJZe8khrDHrEQ/Design?node-id=15%3A778&t=60paBAw74QV0grHF-1",
    },
  },
} as Meta;

type Args = {
  copy: Copy;
};

const Template: Story<Args> = (args: Args) =>
  html`<copied-item .copy=${args.copy}></copied-item>`;

export const TextCopy = Template.bind({});
TextCopy.args = {
  copy: textCopyMock,
};

export const ImageCopy = Template.bind({});
ImageCopy.args = {
  copy: imageCopyMock,
};
