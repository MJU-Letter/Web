import type { Meta, StoryObj } from "@storybook/react";

import MainDetail from "./MainDetail";

const meta: Meta<typeof MainDetail> = {
  title: "components/templates/Main/MainDetail",
  component: MainDetail,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof MainDetail>;

export const Primary: Story = {
  args: {},
};
