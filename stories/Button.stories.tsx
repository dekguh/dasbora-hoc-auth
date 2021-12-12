import { Meta, Story } from '@storybook/react'
import Button from '../components/atoms/form/Button'
import { IButton } from '../components/utils/types'
import { AiOutlineUser } from 'react-icons/ai'

export default {
    title: 'Atoms/Form/Button',
    component: Button
} as Meta

const Template : Story<IButton> = (args) => (
    <Button {...args}/>
)

export const Example = Template.bind({})

Example.args = {
    typeButton: 'primary',
    text: 'Button',
    Icon: AiOutlineUser
}