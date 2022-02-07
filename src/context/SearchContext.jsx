import { createContext, useContext, useMemo, useState } from 'react'

const SearchContext = createContext()

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState({})

  const contextValue = useMemo(
    () => ({ search, setSearch, results, setResults }),
    [search, setSearch, results, setResults]
  )
  return <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>
}

const useSearch = () => {
  const context = useContext(SearchContext)

  if (context === undefined) {
    throw new Error('useSearch must be defined within a SearchContext Provider')
  }

  const { search, setSearch } = context

  return { search, setSearch }
}

const useResults = () => {
  const context = useContext(SearchContext)
  if (context === undefined) {
    throw new Error('useResults must be defined within a SearchContext Provider')
  }
  const { results, setResults } = context
  return { results, setResults }
}

export { SearchProvider, useSearch, useResults }
