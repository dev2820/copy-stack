import { Story, Meta } from "@storybook/web-components";
import { html } from "lit-html";
import copyList from "@mocks/copyList";
import router from "@/modules/router";
import routes from "@/routes";
import "@/pages/DetailPage";

export default {
  title: "pages/DetailPage",
} as Meta;

type Args = {
  id: string;
  parameters: { design: Record<string, string>; store: Record<string, object> };
};

const Template: Story<Args> = (args: Args) => {
  router.init(routes, `/${args.id}`);

  return html`
    <div style="width:360px; height:500px; overflow:hidden;">
      <detail-page></detail-page>
    </div>
  `;
};

export const TextDetail = Template.bind({});
TextDetail.args = {
  id: "1",
};
TextDetail.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Llbx0pdb3UJZe8khrDHrEQ/Design?node-id=33%3A1462&t=0hxqEyxwnYwks4Mm-1",
  },
  store: {
    data: {
      copyList,
    },
  },
};

export const ImageDetail = Template.bind({});
ImageDetail.args = {
  id: "3",
};
ImageDetail.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Llbx0pdb3UJZe8khrDHrEQ/Design?node-id=33%3A1462&t=0hxqEyxwnYwks4Mm-1",
  },
  store: {
    data: {
      copyList,
    },
  },
};
