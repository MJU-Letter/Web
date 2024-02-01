import type { Meta, StoryObj } from "@storybook/react";

import Navigation from "./Navigation";

const meta: Meta<typeof Navigation> = {
  title: "components/organisms/navigation/Navigation",
  component: Navigation,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Navigation>;

export const Primary: Story = {
  args: {},
};
