import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import GifItem from './GifItem'

describe('Gif Item test', () => {

  const dummyData = {
    title: 'test_title gif',
    url: ''
  }

  test('should render properly', () => {
    render(
      <GifItem {...dummyData}/>
    )
    expect(screen.getByAltText('test_title gif')).toBeInTheDocument()
    expect(screen.getByText('test_title gif')).toBeInTheDocument()
  })
})
