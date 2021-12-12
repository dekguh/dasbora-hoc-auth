import { Meta, Story } from '@storybook/react'
import AuthTemplate from '../components/template/AuthTemplate'

export default {
    title: 'Templates/AuthTemplate',
    component: AuthTemplate
} as Meta

const Template = () => (
    <AuthTemplate />
)

export const Example = Template.bind({})