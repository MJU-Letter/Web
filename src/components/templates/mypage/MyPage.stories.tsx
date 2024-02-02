import type { Meta, StoryObj } from "@storybook/react";

import MyPage from "./MyPage";

const meta: Meta<typeof MyPage> = {
  title: "components/templates/mypage/MyPage",
  component: MyPage,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof MyPage>;

export const Primary: Story = {
  args: {},
};
