import { Meta, Story } from '@storybook/react'
import FormLogin from '../components/organisms/FormLogin'

export default {
    title: 'Organisms/Auth/FormLogin',
    component: FormLogin
} as Meta

const Template = () => (
    <FormLogin />
)

export const Example = Template.bind({})