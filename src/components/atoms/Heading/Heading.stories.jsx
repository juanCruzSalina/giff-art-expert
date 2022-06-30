import React from 'react'
import Heading from './Heading'

export default {
  title: 'Components/Atoms/Heading',
  component: Heading
}

const Template = (args) => <Heading {...args}/>

export const Default = Template.bind({})
Default.args = {
  children: 'Example Heading',
  size: 'title'
}