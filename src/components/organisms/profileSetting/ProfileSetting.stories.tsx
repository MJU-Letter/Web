import type { Meta, StoryObj } from "@storybook/react";
import test from "../../../../public/icons/testProfile.png";

import ProfileSetting from "./ProfileSetting";

const meta: Meta<typeof ProfileSetting> = {
  title: "components/organisms/profileSetting/ProfileSetting",
  component: ProfileSetting,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ProfileSetting>;

export const Primary: Story = {
  args: {
    name: "이보현",
    major: "응용소프트웨어전공",
    studentId: "19",
    instagramId: "keepkeepkeepkeepbegging",
    profileImg: test,
  },
};
