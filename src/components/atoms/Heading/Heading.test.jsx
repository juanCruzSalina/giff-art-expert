import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Heading from './Heading'

describe('Heading component test', () => {
  test('should render properly', () => {
    render(
      <Heading size='subtitle'>
        example heading
      </Heading>
    )
    expect(screen.getByText(/example heading/i)).toBeInTheDocument()
  })
})