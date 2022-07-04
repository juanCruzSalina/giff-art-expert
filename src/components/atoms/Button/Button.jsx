import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/** Button component, can be used with or without a button */
const Button = ({children, icon}) => {
  return (
    <button className={'button__main'} type='submit'>
      { icon ?  <FontAwesomeIcon icon={icon} className={'button__icon'}/> : <></>}
      {children}
    </button>
  )
}

Button.propTypes = {
  /** Content of the button */
  children: PropTypes.string.isRequired,
  /** Icon of the button, not required */
  icon: PropTypes.any
}

export default Button