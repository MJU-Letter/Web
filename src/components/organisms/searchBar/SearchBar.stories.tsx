import type { Meta, StoryObj } from "@storybook/react";

import SearchBar from "./SearchBar";

const meta: Meta<typeof SearchBar> = {
  title: "components/organisms/searchBar",
  component: SearchBar,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

export const Primary: Story = {
  args: {},
};
