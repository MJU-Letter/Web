import type { Meta, StoryObj } from "@storybook/react";

import NavigationList from "./NavigationList";

const meta: Meta<typeof NavigationList> = {
  title: "components/organisms/navigation/NavigationList",
  component: NavigationList,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof NavigationList>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: "이인서",
      major: "경영",
      studentId: "21",
    },
  },
};

export const LoggedOut: Story = {
  args: {},
};
