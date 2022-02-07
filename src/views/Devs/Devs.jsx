import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DevList from '../../components/DevList/DevList'
import Pagination from '../../components/Pagination/Pagination'
import { useSearch } from '../../context/SearchContext'
import { useDevSearchResults } from '../../hooks/useDevSearchResults'

export default function Devs() {
  const [devList, setDevList] = useState([])

  const {
    results: { items },
  } = useDevSearchResults()

  const { search } = useSearch()

  const [currentPage, setCurrentPage] = useState(1)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const devsPerPage = 5

  useEffect(() => {
    if (items) {
      const indexOfLastDev = currentPage * devsPerPage
      const indexOfFirstDev = indexOfLastDev - devsPerPage
      const currentDevs = items.slice(indexOfFirstDev, indexOfLastDev)
      setDevList(currentDevs)
    }
  }, [currentPage, items, devsPerPage])

  return (
    <>
      <h2 className="text-3xl">
        <span className="text-red-600">{items?.length || 0}</span> devs found for:{' '}
        <span className="text-blue-600">{search}</span>
      </h2>
      <DevList devList={devList} />
      <Pagination
        devsPerPage={devsPerPage}
        totalDevs={items?.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      <Link to="/">Back to Search &larr; </Link>
    </>
  )
}
