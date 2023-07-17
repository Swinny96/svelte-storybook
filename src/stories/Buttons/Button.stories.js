import Button from "./Button.svelte";

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    backgrounds: {
      values: [
        { name: "Header", value: "#003594" },
        { name: "Sidebar", value: "#CED4DA" },
        { name: "Body", value: "#F4F5F6" },
        { name: "Footer", value: "#FFF" },
      ],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    size: {
      control: { type: "select" },
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary = {
  args: {
    label: "Button",
  },
};
