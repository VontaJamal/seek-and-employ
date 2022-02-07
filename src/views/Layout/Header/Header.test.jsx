import { screen, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Header from './Header'

test('The header renders correctly', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  )
  const logo = screen.getByRole('img', {
    name: /seek and employ logo/i,
  })

  expect(logo).toBeInTheDocument()
})
