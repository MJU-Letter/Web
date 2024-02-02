import type { Meta, StoryObj } from "@storybook/react";

import ModalContent from "./ModalContent";

const meta: Meta<typeof ModalContent> = {
  title: "components/molecules/modal/ModalContent",
  component: ModalContent,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ModalContent>;

export const twoBtn: Story = {
  args: {
    yesBtn: {
      info: "확인",
    },
    info: "안녕하십니까?",
    noBtn: {
      info: "취소",
    },
  },
};

export const oneBtn: Story = {
  args: {
    yesBtn: {
      info: "확인",
    },
    info: "안녕하십니까? \n 안녕하십니까",
  },
};
