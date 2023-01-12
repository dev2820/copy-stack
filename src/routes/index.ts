import { html } from "lit-html";

import "@/pages/MainPage";

const mainPage = {
  path: "/",
  page: () => html`<main-page></main-page>`,
};

const detailPage = {
  path: "/:id",
  page: () => html`<detail-page></detail-page>`,
};

export default [mainPage, detailPage];
