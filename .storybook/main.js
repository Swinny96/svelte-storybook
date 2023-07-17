/** @type { import('@storybook/sveltekit').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-docs",
    '@storybook/addon-a11y',
    'storybook-addon-themes',
    '@storybook/preset-scss',
  ],
  framework: {
    name: "@storybook/sveltekit",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
