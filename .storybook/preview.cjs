import { html } from "lit-html";
import globalStyle from "@/assets/global.css?inline";
import { decorator as radioDecorator } from "../__mocks__/modules/broadcasting/Radio";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  radioDecorator,
  (story) =>
    html`<div class="theme-provider">
      <style>
        ${globalStyle}
      </style>
      ${story()}
    </div>`,
];
