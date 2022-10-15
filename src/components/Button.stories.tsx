import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from "./Button";

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Create account',
    },
    argTypes: {}
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {

}

export const CustomComponent: StoryObj<ButtonProps> = {

}