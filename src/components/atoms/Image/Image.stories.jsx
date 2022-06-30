import React from 'react'
import Image from './Image'


export default {
  title: 'Components/Atoms/Image',
  component: Image
}

const Template = (args) => <Image {...args}/>

export const Default = Template.bind({})
Default.args = {
  src: 'https://c.tenor.com/jDECWtMMxZoAAAAC/saitama-one-punch-man.gif',
  alt: 'test'
}