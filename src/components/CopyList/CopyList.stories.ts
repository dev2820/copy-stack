import { Story, Meta } from "@storybook/web-components";
import { html } from "lit-html";
import copyList from "@mocks/copyList";

import "@/components/CopyList";

export default {
  title: "CopyList",
} as Meta;

type Args = {
  parameters: { design: Record<string, string>; store: Record<string, object> };
};

const Template: Story<Args> = () =>
  html`<copy-list>Hello World!!!!</copy-list>`;

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Llbx0pdb3UJZe8khrDHrEQ/Design?node-id=30%3A604&t=Q3Rvtrc69Xc3Cc8f-1",
  },
  store: {
    data: {
      copyList,
    },
  },
};

export const Empty = Template.bind({});
Empty.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Llbx0pdb3UJZe8khrDHrEQ/Design?node-id=30%3A604&t=Q3Rvtrc69Xc3Cc8f-1",
  },
  store: {
    data: {
      copyList: [],
    },
  },
};
