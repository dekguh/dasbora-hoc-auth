import { Meta, Story } from '@storybook/react'
import InputTextField from '../components/atoms/form/InputTextField'
import { IInputTextField } from '../components/utils/types'
import { BsEnvelope } from 'react-icons/bs'

export default {
    title: 'Atoms/Form/InputTextField',
    component: InputTextField
} as Meta

const Template : Story<IInputTextField> = (args) => (
    <InputTextField {...args}/>
)

export const Example = Template.bind({})

Example.args = {
    type: 'email',
    placeholder: 'enter email',
    Icon: BsEnvelope
}