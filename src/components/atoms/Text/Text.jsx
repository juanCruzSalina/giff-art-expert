import React from 'react'
import PropTypes from 'prop-types'

/** Text component for loading gifs titles */
const Text = ({ children }) => {
  return (
    <p className={'text__main'}>
      { children }
    </p>
  )
}

Text.propTypes = {
  /** Content of the component */
  children: PropTypes.string.isRequired
}

export default Text