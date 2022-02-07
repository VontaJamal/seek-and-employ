import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useResults, useSearch } from '../context/SearchContext'
import { fetchDevs } from '../services/github'

// eslint-disable-next-line import/prefer-default-export
export const useDevSearchResults = () => {
  const { search } = useLocation()
  const searchParams = new URLSearchParams(search)
  const devsSearched = searchParams.get('devs')
  const { setResults, results } = useResults()
  const { setSearch } = useSearch()

  useEffect(() => {
    const searchDevs = async () => {
      const devResults = await fetchDevs(devsSearched)
      setResults(devResults)
      setSearch(devsSearched)
    }

    searchDevs()
  }, [devsSearched, setResults, setSearch])

  return { results }
}
