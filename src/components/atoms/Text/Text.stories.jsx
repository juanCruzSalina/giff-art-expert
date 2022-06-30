import React from 'react'
import Text from './Text'

export default {
  title: 'Components/Atoms/Text',
  components: Text
}

const Template = (args) => <Text {...args}/>

export const Default = Template.bind({})
Default.args = {
  children: 'Example text for gifs'
}