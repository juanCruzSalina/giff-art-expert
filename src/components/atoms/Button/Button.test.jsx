import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Button component tests', () => {
  test('should render properly', () => {
    render(
      <Button>
        test button
      </Button>
    )
    expect(screen.getByText(/test button/i)).toBeInTheDocument()
  })
})