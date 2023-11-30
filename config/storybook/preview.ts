import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        decorators: [StyleDecorator, RouterDecorator],
        themes: [
            {
                name: Theme.DARK,
                class: ['dark', 'app'],
                color: '#090949',
            },
            {
                name: Theme.LIGHT,
                class: '',
                color: '#fff',
                default: true,
            },
        ],
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

export default preview;
