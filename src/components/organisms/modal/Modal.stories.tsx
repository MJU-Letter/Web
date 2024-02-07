import type { Meta, StoryObj } from "@storybook/react";

import Modal from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "components/organisms/modal/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Modal>;

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

export const noBtn: Story = {
  args: {
    info: "안녕하십니까? \n 안녕하십니까",
  },
};
