import { Story, Meta } from '@storybook/react'
import TextLabel from '../components/atoms/text/TextLabel'
import { ITextLabel } from '../components/utils/types'

export default {
    title: 'Atoms/Text/TextLabel',
    component: TextLabel
} as Meta

const Template : Story<ITextLabel> = (args) => (
    <TextLabel {...args}/>
)

export const Example = Template.bind({})

Example.args = {
    text: 'Label'
}