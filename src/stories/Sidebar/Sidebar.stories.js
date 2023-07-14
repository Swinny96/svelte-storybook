import Sidebar from "./Sidebar.svelte";

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
export default {
  title: "Layout/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
};

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Standard = {
  args: {
    label: "Login",
    link1: "Login",
    link2: "Register",
  },
};
