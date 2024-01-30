import type { Meta, StoryObj } from "@storybook/react";

import Toggle from "./Toggle";

const meta: Meta<typeof Toggle> = {
  title: "components/atoms/button/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const isOn: Story = {
  args: {
    isOn: true,
    toggleFn(isOn) {
      console.log("clicked", isOn);
    },
  },
};

export const isOff: Story = {
  args: {
    isOn: false,
    toggleFn(isOn) {
      console.log("clicked", isOn);
    },
  },
};
