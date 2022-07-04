import React, { useState } from 'react'
import './SearchForm.css'

import Input from '../../atoms/Input/Input'
import Button from '../../atoms/Button/Button'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchForm = ({ onSubmit }) => {

  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (value.trim().length <= 1) return;

    onSubmit( categories => [value, ...categories])
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='searchbar__main'>
        <Input
          placeholder='Search gifs'
          onChange={handleChange}
        />
        <Button icon={faSearch}>
          Search
        </Button>
      </div>
    </form>
  )
}

export default SearchForm