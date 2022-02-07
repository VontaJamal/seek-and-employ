import { useHistory } from 'react-router-dom'
import { useSearch } from '../../context/SearchContext'

export default function Search() {
  const { search, setSearch } = useSearch()
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!search) return
    history.push(`/devs?devs=${search}`)
    setSearch('')
  }

  return (
    <form className="text-4xl" onSubmit={handleSubmit}>
      <fieldset className="border-2 p-7">
        <legend className="text-center">Search for github devs!</legend>
        <label>
          Search User:
          <input
            className="border-8"
            value={search}
            onChange={(e) => setSearch(() => e.target.value)}
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
