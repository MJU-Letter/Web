import type { Meta, StoryObj } from '@storybook/react';
import test from '../../../../public/icons/testProfile.png';

import EmailInput from './EmailInput';

const meta: Meta<typeof EmailInput> = {
  title: 'components/atoms/input/EmailInput',
  component: EmailInput,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof EmailInput>;

export const Default: Story = {
  args: {
    label: '이메일',
    placeholder: '이메일을 입력해 주세요',
  },
};
