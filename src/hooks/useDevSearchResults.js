import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useResults } from '../context/SearchContext'
import { fetchDevs } from '../services/github'

// eslint-disable-next-line import/prefer-default-export
export const useDevSearchResults = () => {
  const { search } = useLocation()
  const searchParams = new URLSearchParams(search)
  const devsSearched = searchParams.get('devs')
  const { setResults, results } = useResults()

  useEffect(() => {
    const searchDevs = async () => {
      const devResults = await fetchDevs(devsSearched)
      setResults(devResults)
    }

    searchDevs()
  }, [devsSearched, setResults])

  return { results }
}
