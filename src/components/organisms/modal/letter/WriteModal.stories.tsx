import type { Meta, StoryObj } from "@storybook/react";
import WriteModal from "./WriteModal";
const meta: Meta<typeof WriteModal> = {
  title: "components/organisms/modal/WriteModal",
  component: WriteModal,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof WriteModal>;

export const Primary: Story = {
  args: {},
};
