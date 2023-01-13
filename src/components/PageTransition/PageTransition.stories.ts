import { Story, Meta } from "@storybook/web-components";
import { html, TemplateResult } from "lit-html";
import copyList from "@mocks/copyList";

import router from "@/modules/router";
import routes from "@/routes";
import "@/components/PageTransition";

export default {
  title: "PageTransition",
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
      go next
    </button>
    <button
      @click="${() => {
        router.back();
      }}"
    >
      go back
    </button>
    <page-transition>
      <div slot="main">main</div>
      <div slot="right">right</div>
    </page-transition>
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
