import { screen, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { SearchProvider } from '../../../context/SearchContext'
import Header from './Header'

test('The header renders correctly', () => {
  render(
    <SearchProvider>
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    </SearchProvider>
  )
  const logo = screen.getByRole('img', {
    name: /seek and employ logo/i,
  })

  expect(logo).toBeInTheDocument()
})
