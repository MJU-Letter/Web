import type { Meta, StoryObj } from "@storybook/react";

import Auth from "./Auth";

const meta: Meta<typeof Auth> = {
  title: "components/templates/login/Auth",
  component: Auth,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Auth>;

export const isUploaded: Story = {
  args: {
    isUploaded: true,
  },
};

export const isNotUploaded: Story = {
  args: {
    isUploaded: false,
  },
};
