import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useResults, useSearch } from '../../context/SearchContext'

export default function Search() {
  const { search, setSearch } = useSearch()
  const [searchTerm, setSearchTerm] = useState('')
  const { setResults } = useResults()
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!searchTerm) return
    setResults({})
    setSearch(searchTerm)
    history.push(`/devs?devs=${searchTerm}`)
    setSearchTerm('')
  }

  return (
    <form className="text-4xl" onSubmit={handleSubmit}>
      <fieldset className="border-2 p-7">
        <legend className="text-center">Search for github devs!</legend>
        <label>
          Search User:
          <input
            className="border-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(() => e.target.value)}
            placeholder="name..."
            // eslint-disable-next-line
            autoFocus
          />
        </label>
        <button type="submit">Search &rarr;</button>
      </fieldset>
    </form>
  )
}
