import React from 'react'
import Input from './Input'

export default {
  title: 'Components/Atoms/Input',
  component: Input
}

const Template = (args) => <Input {...args}/>

export const Default = Template.bind({})
Default.args = {
  placeholder: 'test',
  onChange: (event) => console.log(event.target.value)
}