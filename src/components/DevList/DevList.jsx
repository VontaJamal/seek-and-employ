import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useResults } from '../../context/SearchContext'
import { useDevSearchResults } from '../../hooks/useDevSearchResults'
import { fetchDevs } from '../../services/github'
import Dev from '../Dev/Dev'

export default function DevList() {
  const {
    results: { items: devList },
  } = useDevSearchResults()

  return (
    <div className="w-full">
      <ul className="flex">
        {devList.map((dev) => {
          return (
            <li key={dev.id}>
              <Dev dev={dev} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
