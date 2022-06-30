import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/** Button component, can be used with or without a button */
const Button = ({children, icon}) => {
  return (
    <div className={'button__main'}>
      { icon ?  <FontAwesomeIcon icon={icon} className={'button__icon'}/> : <></>}
      {children}
    </div>
  )
}

Button.propTypes = {
  /** Content of the button */
  children: PropTypes.string.isRequired,
  /** Icon of the button, not required */
  icon: PropTypes.oneOf(['svg'])
}

export default Button