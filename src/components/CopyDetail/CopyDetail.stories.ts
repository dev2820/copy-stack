import { Story, Meta } from "@storybook/web-components";
import { html } from "lit-html";
import { textCopyMock, imageCopyMock } from "@mocks/copyList";
import Copy from "@/types/Copy";

export default {
  title: "CopyDetail",
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
  html`<copy-detail .copy=${args.copy}></copy-detail>`;

export const TextDetail = Template.bind({});
TextDetail.args = {
  copy: textCopyMock,
};
TextDetail.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Llbx0pdb3UJZe8khrDHrEQ/Design?node-id=33%3A985&t=0hxqEyxwnYwks4Mm-1",
  },
};

export const ImageDetail = Template.bind({});
ImageDetail.args = {
  copy: imageCopyMock,
};
ImageDetail.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Llbx0pdb3UJZe8khrDHrEQ/Design?node-id=33%3A1216&t=0hxqEyxwnYwks4Mm-1",
  },
};
