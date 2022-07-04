import React from 'react'
import GifItem from './GifItem'

export default {
  title: 'Components/Molecules/Gif Items',
  component: GifItem
}

const Template = (args) => <GifItem {...args}/>

export const Default = Template.bind({})
Default.args = {
  title: 'example image gif',
  url: 'https://c.tenor.com/jDECWtMMxZoAAAAC/saitama-one-punch-man.gif'
}