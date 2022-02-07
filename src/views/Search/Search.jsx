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
    <form className="w-full max-w-sm" onSubmit={handleSubmit}>
      <fieldset className="border-2 p-7">
        <legend className="text-center">Search for github devs!</legend>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="search"
            >
              Search:
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(() => e.target.value)}
              placeholder="name..."
              // eslint-disable-next-line
              autoFocus
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3" />
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Search &rarr;
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  )
}
