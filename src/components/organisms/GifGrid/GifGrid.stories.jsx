import React from 'react'
import GifGrid from './GifGrid'

export default {
  title: 'Components/Organisms/Gif Grid',
  component: GifGrid
}

const Template = (args) => <GifGrid {...args}/>

export const Default = Template.bind({})
Default.args = {
  category: 'sonic'
}