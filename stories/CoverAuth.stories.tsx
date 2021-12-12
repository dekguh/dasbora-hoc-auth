import { Meta, Story } from '@storybook/react'
import CoverAuth from '../components/organisms/CoverAuth'

export default {
    title: 'Organisms/Auth/CoverAuth',
    component: CoverAuth
} as Meta

const Template = () => (
    <CoverAuth />
)

export const Example = Template.bind({})