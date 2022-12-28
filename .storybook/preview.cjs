import { html } from "lit-html";
import { decorator as messengerDecorator } from "/__mocks__/classes/Messenger.ts";
import globalStyle from "@/assets/global.css?inline";
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
  messengerDecorator,
  (story) =>
    html`<div class="theme-provider">
      <style>
        ${globalStyle}
      </style>
      ${story()}
    </div>`,
];
