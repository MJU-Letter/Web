import type { Meta, StoryObj } from "@storybook/react";

import ColorPick from "./ColorPick";

const meta: Meta<typeof ColorPick> = {
  title: "components/atoms/letterWriting/ColorPick",
  component: ColorPick,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ColorPick>;

export const red: Story = {
  args: {
    selectedColor: "red",
  },
};

export const green: Story = {
  args: {
    selectedColor: "green",
  },
};
export const yellow: Story = {
  args: {
    selectedColor: "yellow",
  },
};
export const blue: Story = {
  args: {
    selectedColor: "blue",
  },
};
