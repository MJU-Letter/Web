import type { Meta, StoryObj } from "@storybook/react";

import LetterToggle from "./LetterToggle";

const meta: Meta<typeof LetterToggle> = {
  title: "components/atoms/button/LetterToggle",
  component: LetterToggle,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof LetterToggle>;

export const received: Story = {
  args: {
    selectedOption: "received",
  },
};

export const sent: Story = {
  args: {
    selectedOption: "sent",
  },
};
