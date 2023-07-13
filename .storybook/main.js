/** @type { import('@storybook/sveltekit').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/sveltekit",
    options: {
      less: {
        // Require your Less preprocessor here
        implementation: require('less'),
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
