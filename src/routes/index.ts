import { html } from "lit-html";

import "@/pages/MainPage";

export const mainPage = {
  path: "/",
  page: () => html`<main-page></main-page>`,
};

export const detailPage = {
  path: "/:id",
  page: () => html`<detail-page></detail-page>`,
};

export default [mainPage, detailPage];
