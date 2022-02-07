import { useEffect, useState } from 'react'
import { fetchDevDetails } from '../../services/github'
import Dev from '../Dev/Dev'

export default function DevList({ devList = [] }) {
  const [devDetails, setDevDetails] = useState([])

  useEffect(() => {
    const getDevDetails = async () => {
      const detailData = await fetchDevDetails(devList)
      setDevDetails(detailData)
    }
    getDevDetails()
  }, [devList])

  return (
    <div className="container mt-4 mx-auto">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {devDetails?.map((dev) => {
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
