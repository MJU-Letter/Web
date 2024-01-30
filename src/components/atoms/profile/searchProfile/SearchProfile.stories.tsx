import type { Meta, StoryObj } from "@storybook/react";
import test from "../../../../../public/icons/testProfile.png";

import SearchProfile from "./SearchProfile";

const meta: Meta<typeof SearchProfile> = {
  title: "components/atoms/profile/SearchProfile",
  component: SearchProfile,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof SearchProfile>;

export const primary: Story = {
  args: {
    profileImg: test,
    name: "이보현",
    major: "응용소프트웨어전공",
    studentId: "19",
  },
};
