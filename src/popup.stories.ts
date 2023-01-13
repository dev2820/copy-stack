import { Story, Meta } from "@storybook/web-components";
import { html, TemplateResult } from "lit-html";
import copyList from "@mocks/copyList";
import router from "@/modules/router";
import routes from "@/routes";
import "@/components/PageTransition";
import "@/pages/MainPage";
import "@/pages/DetailPage";

export default {
  title: "app/app",
} as Meta;

type Args = {
  content: string | TemplateResult<1>;
  checked: boolean;
};

const Template: Story<Args> = () => {
  router.init(routes);
  return html`
    <div
      style="width:var(--screen-width); height:var(--screen-height); overflow:hidden;"
    >
      <page-transition>
        <main-page slot="main"></main-page>
        <detail-page slot="right"></detail-page>
      </page-transition>
    </div>
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
