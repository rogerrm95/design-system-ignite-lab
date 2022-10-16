import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from "./Button";

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Create account',
    },
    argTypes: {
        className: {
            table: {
                disable: true
            }
        }
    }
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {

}

export const CustomComponent: StoryObj<ButtonProps> = {
    argTypes: {
        asChild: {
            table: {
                disable: true
            }
        }
    }
}