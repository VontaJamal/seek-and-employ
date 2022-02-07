import { screen, render } from '@testing-library/react'
import Footer from './Footer'

test('The header renders correctly', () => {
  render(<Footer />)
  const footerText = screen.getByText(/seek and employ/i)

  expect(footerText).toBeInTheDocument()
})
