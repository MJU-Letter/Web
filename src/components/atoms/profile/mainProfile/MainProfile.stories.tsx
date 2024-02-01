import type { Meta, StoryObj } from "@storybook/react";
import test from "../../../../../public/icons/testProfile.png";

import MainProfile from "./MainProfile";

const meta: Meta<typeof MainProfile> = {
  title: "components/atoms/profile/MainProfile",
  component: MainProfile,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof MainProfile>;

export const primary: Story = {
  args: {
    profileImg: test,
    name: "이보현",
    major: "응용소프트웨어전공",
    studentId: "19",
  },
};
