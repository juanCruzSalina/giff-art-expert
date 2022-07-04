import React from 'react'
import PropTypes from 'prop-types'
import './Input.css'

/** Input component used to search gifs */
const Input = ({ placeholder, onChange }) => {
  return (
    <div className="input__container">
      <input
        placeholder={placeholder}
        onChange={onChange}
        className={'input__main'}
        name='category'
      />
    </div>
  )
}

Input.propTypes = {
  /** Placeholder of the Input */
  placeholder: PropTypes.string.isRequired,
  /** Handler for the value of the Input */
  onChange: PropTypes.func.isRequired
}

export default Input