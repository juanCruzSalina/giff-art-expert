import React from 'react'
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import SearchForm from './SearchForm';

describe('Search form component tests', () => {
  const mockSubmit = jest.fn()
  test('should render properly', () => {
    render(
      <SearchForm onSubmit={mockSubmit}/>
    )
    expect(screen.getByPlaceholderText(/search gifs/i)).toBeInTheDocument()
    expect(screen.getByText(/search/i)).toBeInTheDocument()
  })
})