import { Story, Meta } from "@storybook/web-components";
import { html } from "lit-html";
import copyList from "@mocks/copyList";

import "@/components/TextCopy";

export default {
  title: "TextCopy",
} as Meta;

type Args = {
  parameters: { design: Record<string, string>; store: Record<string, object> };
};
const textCopyMock = copyList[0];
const Template: Story<Args> = () =>
  html`<text-copy .copy=${textCopyMock}></text-copy>`;

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Llbx0pdb3UJZe8khrDHrEQ/Design?node-id=12%3A23&t=60paBAw74QV0grHF-1",
  },
};
