import type { Meta, StoryObj } from "@storybook/react";

import CheckBox from "./CheckBox";

const meta: Meta<typeof CheckBox> = {
  title: "components/atoms/letterWriting/CheckBox",
  component: CheckBox,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof CheckBox>;

export const isChecked: Story = {
  args: {
    isChecked: true,
  },
};

export const isNotChecked: Story = {
  args: {
    isChecked: false,
  },
};
