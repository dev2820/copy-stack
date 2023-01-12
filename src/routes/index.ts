import { html } from "lit-html";

import "@/pages/MainPage";

const mainPage = {
  path: "/",
  page: () => html`<main-page></main-page>`,
};

export default [mainPage];
