import type { Meta, StoryObj } from "@storybook/react";
import test from "../../../../../public/icons/testProfile.png";

import DetailProfile from "./DetailProfile";

const meta: Meta<typeof DetailProfile> = {
  title: "components/atoms/profile/DetailProfile",
  component: DetailProfile,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof DetailProfile>;

export const WithID: Story = {
  args: {
    profileImg: test,
    name: "이보현",
    major: "응용소프트웨어전공",
    studentId: "19",
    instagramId: "depth_mju_co.kr",
  },
};

export const WithoutID: Story = {
  args: {
    profileImg: test,
    name: "이보현",
    major: "응용소프트웨어전공",
    studentId: "19",
  },
};
