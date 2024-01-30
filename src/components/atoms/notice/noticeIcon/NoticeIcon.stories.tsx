import type { Meta, StoryObj } from "@storybook/react";

import NoticeIcon from "./NoticeIcon";

const meta: Meta<typeof NoticeIcon> = {
  title: "components/atoms/notice/NoticeIcon",
  component: NoticeIcon,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof NoticeIcon>;

export const isOn: Story = {
  args: {
    isOn: true,
  },
};

export const isOff: Story = {
  args: { isOn: false },
};
