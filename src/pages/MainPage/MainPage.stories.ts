import { Story, Meta } from "@storybook/web-components";
import { html } from "lit-html";
import copyList from "@mocks/copyList";

import "@/pages/MainPage";

export default {
  title: "pages/MainPage",
} as Meta;

type Args = {
  parameters: { design: Record<string, string>; store: Record<string, object> };
};

const Template: Story<Args> = () => html`
  <div style="width:360px; height:500px; overflow:hidden;">
    <main-page></main-page>
  </div>
`;

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Llbx0pdb3UJZe8khrDHrEQ/Design?node-id=21%3A4996&t=okNG2IhYjbxo6hkR-1",
  },
  store: {
    data: {
      copyList,
    },
  },
};
