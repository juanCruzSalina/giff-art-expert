import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import Text from './Text';

describe('Text component test', () => {
  test('should render properly', () => {
    render(
      <Text>
        this is an example text
      </Text>
    )
    expect(screen.getByText(/this is an example text/i)).toBeInTheDocument()
  })
})