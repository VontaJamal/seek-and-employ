import { useDevSearchResults } from '../../hooks/useDevSearchResults'
import Dev from '../Dev/Dev'

export default function DevList() {
  const {
    results: { items: devList },
  } = useDevSearchResults()

  return (
    <div className="container mt-4 mx-auto">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {devList?.map((dev) => {
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
