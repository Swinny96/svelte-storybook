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
      default: "incharge",
      list: [
        {
          name: "incharge",
          class: ["incharge", "light-mode"],
          color: "#003594",
        },
        {
          name: "ee",
          class: ["ee-mm", "dark-mode"],
          color: "#009C9C",
        },
      ],
    },
  },
};

export default preview;
