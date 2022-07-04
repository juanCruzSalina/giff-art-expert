import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import GifGrid from './GifGrid';

describe('Gif grid component', () => {
  test('should render properly', () => {
    const example = 'test'
    render(
      <GifGrid category={example}/>
    )
    expect(screen.getByText(/test/i)).toBeInTheDocument()
  })
})