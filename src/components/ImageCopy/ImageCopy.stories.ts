import { Story, Meta } from "@storybook/web-components";
import { html } from "lit-html";
import copyList from "@mocks/copyList";

import "@/components/ImageCopy";

export default {
  title: "ImageCopy",
} as Meta;

type Args = {
  parameters: { design: Record<string, string>; store: Record<string, object> };
};
const ImageCopyMock = copyList[1];
const Template: Story<Args> = () =>
  html`<image-copy .copy=${ImageCopyMock}></image-copy>`;

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Llbx0pdb3UJZe8khrDHrEQ/Design?node-id=15%3A778&t=60paBAw74QV0grHF-1",
  },
};
