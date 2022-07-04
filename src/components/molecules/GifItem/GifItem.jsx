import React from 'react'
import PropTypes from "prop-types";
import './GifItem.css'

import Image from '../../atoms/Image/Image'
import Text from '../../atoms/Text/Text'

const GifItem = ({ title, url }) => {
  return (
    <div className={'gifItem__container'}>
      <Image src={url} alt={title}/>
      <div className={'gifItem__text'}>
        <Text>{title}</Text>
      </div>
    </div>
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default GifItem