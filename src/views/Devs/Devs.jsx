import { Link } from 'react-router-dom'
import DevList from '../../components/DevList/DevList'
import { useResults, useSearch } from '../../context/SearchContext'

export default function Devs() {
  const {
    results: { items },
  } = useResults()

  const { search } = useSearch()

  return (
    <>
      <h2 className="text-3xl">
        <span className="text-red-600">{items?.length || 0}</span> devs found for:{' '}
        <span className="text-blue-600">{search}</span>
      </h2>
      <DevList />
      <Link to="/">Back to Search &larr; </Link>
    </>
  )
}
