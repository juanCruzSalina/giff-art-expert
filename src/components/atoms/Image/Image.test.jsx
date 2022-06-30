import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Image from './Image'

describe('Image component tests', () => {
  test('should render properly', () => {
    const mockdata = {
      src: 'https://c.tenor.com/jDECWtMMxZoAAAAC/saitama-one-punch-man.gif',
      alt: 'test'
    }
    render(
      <Image {...mockdata}/>
    )
    expect(screen.getByAltText(/test/i)).toBeInTheDocument()
  })
})