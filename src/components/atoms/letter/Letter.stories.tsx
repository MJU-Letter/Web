import type { Meta, StoryObj } from "@storybook/react";
import test from "../../../../public/icons/testProfile.png";

import Letter from "./Letter";

const meta: Meta<typeof Letter> = {
  title: "components/atoms/letter/Letter",
  component: Letter,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Letter>;

export const DefaultMinLetter: Story = {
  args: {
    letterText: "우리 싸우지 말고 사이 좋게 지내자~~~",
    user: {
      name: "이보현",
      profileImg: test,
    },
    backgroundColor: "#8ED5BE",
    isMine: false,
  },
};

export const DefaultMaxLetter: Story = {
  args: {
    letterText:
      "그 많은 마이크를 저희가 다 사용한게 아그 많은 마이크를 저희가 다 사용한게 아니라서 저희 잘못이 아닐 수도 있그 많은 마이크를 저희가 다 사용한게 아니라서 저희 잘못이 아닐 수도 있희가 다 사용한게 아니라서 저희 잘못이 아닐 수도 있 그 많은 마이크를 저희가 다 사용한게 아니라서 저희 잘못이 아닐 수도 있",
    backgroundColor: "#F39889",
    isMine: false,
  },
};

export const MyLetter: Story = {
  args: {
    letterText: "우리 싸우지 말고 사이 좋게 지내자~~~ ",
    backgroundColor: "#8ED5BE",
    isMine: true,
  },
};
