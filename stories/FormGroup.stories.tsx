import { Meta, Story } from '@storybook/react'
import FormGroup from '../components/molecules/FormGroup'
import { IFormGroup } from '../components/utils/types'

export default {
    title: 'Molecules/FormGroup',
    component: FormGroup
} as Meta

const Template : Story<IFormGroup> = (args) => (
    <FormGroup {...args}/>
)

export const Password = Template.bind({})
export const Text = Template.bind({})
export const Email = Template.bind({})
export const Button = Template.bind({})

Password.args = {
    textLabel: 'Password',
    placeholder: 'placeholder',
    formType: 'password'
}

Text.args = {
    textLabel: 'Label',
    placeholder: 'placeholder',
    formType: 'text'
}

Email.args = {
    textLabel: 'Email',
    placeholder: 'placeholder',
    formType: 'email'
}

Button.args = {
    textLabel: 'Button',
    formType: 'button'
}