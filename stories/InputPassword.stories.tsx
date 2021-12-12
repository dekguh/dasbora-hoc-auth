import { Meta, Story } from '@storybook/react'
import InputPassword from '../components/atoms/form/InputPassword'
import { IInputPassword } from '../components/utils/types'
import { AiOutlineLock } from 'react-icons/ai'

export default {
    title: 'Atoms/Form/InputPassword',
    component: InputPassword
} as Meta

const Template : Story<IInputPassword> = (args) => (
    <InputPassword {...args}/>
)

export const Example = Template.bind({})

Example.args = {
    placeholder: 'enter password',
    Icon: AiOutlineLock
}