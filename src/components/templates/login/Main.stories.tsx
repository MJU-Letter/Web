import type { Meta, StoryObj } from "@storybook/react";

import Main from "./Main";

const meta: Meta<typeof Main> = {
  title: "components/templates/login/Main",
  component: Main,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Main>;

export const Primary: Story = {
  args: {},
};
