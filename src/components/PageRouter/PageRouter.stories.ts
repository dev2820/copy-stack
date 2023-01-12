import { Story, Meta } from "@storybook/web-components";
import { html, TemplateResult } from "lit-html";
import copyList from "@mocks/copyList";

import router from "@/modules/router";
import routes from "@/routes";
import "@/components/PageRouter";

export default {
  title: "pages/PageRouter",
} as Meta;

type Args = {
  content: string | TemplateResult<1>;
  checked: boolean;
};

const Template: Story<Args> = () => {
  router.init(routes);
  return html`
    <button
      @click="${() => {
        router.go("/1");
      }}"
    >
      text detail
    </button>
    <button
      @click="${() => {
        router.go("/3");
      }}"
    >
      image detail
    </button>
    <page-router></page-router>
  `;
};

export const Default = Template.bind({});
Default.parameters = {
  store: {
    data: {
      copyList,
    },
  },
};
