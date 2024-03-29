import { Story, Meta } from "@storybook/web-components";
import { html, TemplateResult } from "lit-html";
import copyList from "@mocks/copyList";
import router from "@/modules/router";
import routes from "@/routes";

import "@/App";

export default {
  title: "app/app",
} as Meta;

type Args = {
  content: string | TemplateResult<1>;
  checked: boolean;
};

const Template: Story<Args> = () => {
  router.init(routes);
  return html` <copy-stack></copy-stack> `;
};

export const Default = Template.bind({});
Default.parameters = {
  store: {
    data: {
      copyList,
    },
  },
};
