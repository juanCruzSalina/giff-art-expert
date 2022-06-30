import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Input from './Input'

describe('Input component tests', () => {
  const mockInput = jest.fn()

  test('should render properly', () => {
    render(
      <Input placeholder={'test'} onChange={mockInput} />
    )
    expect(screen.getByPlaceholderText(/test/i)).toBeInTheDocument()
  })

  test('should chage value on type', async () => {
    const event = userEvent.setup()
    render(
      <Input placeholder={'test'} onChange={mockInput} />
    )
    expect(screen.getByPlaceholderText(/test/i)).toHaveValue('')
    await event.type(screen.getByPlaceholderText(/test/i), 'test')
    expect(screen.getByPlaceholderText(/test/i)).toHaveValue('test')
  })

  test('should remove value on clear', async () => {
    const event = userEvent.setup()
    render(
      <Input placeholder={'test'} onChange={mockInput} />
    )
    expect(screen.getByPlaceholderText(/test/i)).toHaveValue('')
    await event.type(screen.getByPlaceholderText(/test/i), 'test')
    expect(screen.getByPlaceholderText(/test/i)).toHaveValue('test')
    await event.clear(screen.getByPlaceholderText(/test/i))
    expect(screen.getByPlaceholderText(/test/i)).toHaveValue('')
  })
})