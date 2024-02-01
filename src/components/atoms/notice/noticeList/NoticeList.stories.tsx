import type { Meta, StoryObj } from "@storybook/react";

import NoticeList from "./NoticeList";

const meta: Meta<typeof NoticeList> = {
  title: "components/atoms/notice/NoticeList",
  component: NoticeList,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof NoticeList>;

export const realName: Story = {
  args: {
    name: "이보현",
    isChecked: false,
  },
};

export const Anonymous: Story = {
  args: { isChecked: false },
};

export const checked: Story = {
  args: { name: "김세림", isChecked: true },
};
