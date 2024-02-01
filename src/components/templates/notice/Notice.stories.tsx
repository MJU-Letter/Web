import type { Meta, StoryObj } from "@storybook/react";

import Notice from "./Notice";

const meta: Meta<typeof Notice> = {
  title: "components/templates/Notice/Notice",
  component: Notice,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Notice>;

export const Primary: Story = {
  args: {},
};
