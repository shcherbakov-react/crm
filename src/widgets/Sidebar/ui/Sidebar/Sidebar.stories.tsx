import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from 'widgets/Sidebar';

const meta: Meta<typeof Sidebar> = {
    title: 'widget/Sidebar',
    component: Sidebar,
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
    args: {
        className: 'q',
    },
};
