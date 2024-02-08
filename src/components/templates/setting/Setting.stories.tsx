import type { Meta, StoryObj } from "@storybook/react";

import Setting from "./Setting";

const meta: Meta<typeof Setting> = {
  title: "components/templates/setting/Setting",
  component: Setting,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Setting>;

export const Primary: Story = {
  args: {},
};
