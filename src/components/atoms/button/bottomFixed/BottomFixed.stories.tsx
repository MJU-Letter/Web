import type { Meta, StoryObj } from "@storybook/react";

import BottomFixed from "./BottomFixed";

const meta: Meta<typeof BottomFixed> = {
  title: "components/atoms/button/BottomFixed",
  component: BottomFixed,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof BottomFixed>;

export const writeBtn: Story = {
  args: {
    usage: "write",
  },
};

export const shareBtn: Story = {
  args: { usage: "share" },
};
