import { screen, render } from '@testing-library/react'
import Header from './Header'

test('The header renders correctly', () => {
  render(<Header />)
  const logo = screen.getByRole('img', {
    name: /seek and employ logo/i,
  })

  expect(logo).toBeInTheDocument()
})
