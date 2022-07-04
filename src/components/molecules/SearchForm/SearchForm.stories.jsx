import React from 'react'
import SearchForm from './SearchForm'

export default {
  title: 'Components/Molecules/Search Form',
  component: SearchForm
}

const Template = (args) => <SearchForm {...args}/>

export const Default = Template.bind({})
Default.args = {
  onSubmit: (value) => console.log(`Form value is: ${value}`)
}