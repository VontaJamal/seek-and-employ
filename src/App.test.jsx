import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import { SearchProvider } from './context/SearchContext'

test.only('user can perform a search', async () => {
  render(
    <SearchProvider>
      <App />
    </SearchProvider>
  )

  const searchInput = screen.getByRole('textbox', {
    name: /search/i,
  })

  const devToSearch = 'vonta'
  userEvent.type(searchInput, devToSearch)
  expect(searchInput).toHaveValue(devToSearch)

  const searchButton = screen.getByRole('button', {
    name: /search/i,
  })

  userEvent.click(searchButton)
  const results = await screen.findAllByRole('figure')
  expect(results).toHaveLength(5)
})
