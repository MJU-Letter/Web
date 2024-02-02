import type { Meta, StoryObj } from "@storybook/react";

import LetterModal from "./LetterModal";

const meta: Meta<typeof LetterModal> = {
  title: "components/organisms/modal/LetterModal",
  component: LetterModal,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof LetterModal>;

export const Primary: Story = {
  args: {},
};
