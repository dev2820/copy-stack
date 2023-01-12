import { html } from "lit-html";

import "@/pages/MainPage";

export const mainPage = {
  name: "main",
  path: "/",
  page: () => html`<main-page></main-page>`,
};

export const detailPage = {
  name: "detail",
  path: "/:id",
  page: () => html`<detail-page></detail-page>`,
};

export default [mainPage, detailPage];
