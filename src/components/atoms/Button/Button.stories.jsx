import { faWrench } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Button from './Button'

export default {
  title: 'Components/Atoms/Button',
  component: Button
}

const Template = (args) => <Button {...args}/>

export const Default = Template.bind({})
Default.args = {
  children: 'Test button',
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  children: 'Icon button',
  icon: faWrench
}