import React from 'react'
import PropTypes from 'prop-types'

/** Image component to load gifs */
const Image = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} className={'gif__main'} />
  )
}

Image.propTypes = {
  /** Link of the gif */
  src: PropTypes.string.isRequired,
  /** Alt text in case of load with error */
  alt: PropTypes.string.isRequired
}

export default Image