import { screen, render } from '@testing-library/react'
import { SearchProvider } from '../../context/SearchContext'
import Search from './Search'

test('The Search component renders correctly', () => {
  render(
    <SearchProvider>
      <Search />
    </SearchProvider>
  )

  const searchInput = screen.getByRole('textbox', {
    name: /search user:/i,
  })

  const searchButton = screen.getByRole('button', {
    name: /search/i,
  })

  const legendText = screen.getByText(/search for github users!/i)

  expect(searchInput).toBeInTheDocument()
  expect(searchInput).toHaveFocus()
  expect(searchButton).toBeEnabled()
  expect(searchButton).toBeInTheDocument()
  expect(legendText).toBeInTheDocument()
})
