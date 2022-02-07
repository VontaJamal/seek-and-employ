import { createContext, useContext, useMemo, useState } from 'react'

const SearchContext = createContext()

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState('')

  const value = useMemo(() => ({ search, setSearch }), [search, setSearch])
  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
}

const useSearch = () => {
  const context = useContext(SearchContext)

  if (context === undefined) {
    throw new Error('useSearch must be defined within a SearchContext Provider')
  }

  return context
}

export { SearchProvider, useSearch }
