import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders header', () => {
  render(<App />)
  const linkElement = screen.getByText(/Spotify Recently Played/i)
  expect(linkElement).toBeInTheDocument()
})

test('renders action buttons', () => {
  render(<App />)
  const actionButtons = screen.getAllByRole('button')
  expect(actionButtons.length).toBe(3)
})
