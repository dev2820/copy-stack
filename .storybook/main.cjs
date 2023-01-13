const { mergeConfig } = require("vite");
const { resolve } = require("path");
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-designs",
  ],
  framework: "@storybook/web-components",
  core: {
    builder: "@storybook/builder-vite",
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          "@/modules/Messenger": require.resolve(
            "../__mocks__/modules/Messenger.ts"
          ),
          "@/classes/Channel": require.resolve(
            "../__mocks__/classes/Channel.ts"
          ),
          broadcasting: require.resolve(
            "../__mocks__/modules/broadcasting/index.ts"
          ),
          "@mocks": resolve(__dirname, "../__mocks__"),
          "@": resolve(__dirname, "../src"),
        },
      },
    });
  },
};
