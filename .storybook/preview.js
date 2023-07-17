/** @type { import('@storybook/svelte').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    themes: {
      default: "twitter",
      list: [
        {
          name: "twitter",
          class: ["theme-twt", "light-mode"],
          color: "#00aced",
        },
        {
          name: "facebook",
          class: ["theme-fb", "dark-mode"],
          color: "#3b5998",
        },
      ],
    },
  },
};

export default preview;
