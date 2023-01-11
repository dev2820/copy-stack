import { Story, Meta } from "@storybook/web-components";
import { html } from "lit-html";
import type Filter from "@/types/Filter";
import copyList from "@mocks/copyList";
import * as COPY_TYPE from "@/constants/COPY_TYPE";
import "@/components/CopyList";

export default {
  title: "CopyList",
} as Meta;

type Args = {
  filter: Filter;
};

const Template: Story<Args> = (args) =>
  html`<copy-list .filter=${args.filter}>Hello World!!!!</copy-list>`;

export const Default = Template.bind({});
Default.args = {
  filter: [COPY_TYPE.IMAGE, COPY_TYPE.TEXT],
};
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
