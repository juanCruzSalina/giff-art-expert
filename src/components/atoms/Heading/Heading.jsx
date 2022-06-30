import React from 'react'
import PropTypes from 'prop-types'
import './Heading.css'

/** Heading component used for the main title and all gif categories names */
const Heading = ({ children, size }) => {
  return (
    <h2 className={`heading__main ${size}`}>
      {children}
    </h2>
  )
}

Heading.propTypes = {

  /** Content of the component */
  children: PropTypes.string.isRequired,

  /** Size, can be either subtitle or title */
  size: PropTypes.oneOf(['title', 'subtitle']).isRequired
}

export default Heading