import './Pagination.css'

export default function Pagination({ devsPerPage, totalDevs, paginate, currentPage }) {
  if (totalDevs === 0) {
    return <div />
  }

  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalDevs / devsPerPage); i += 1) {
    pageNumbers.push(i)
  }

  return (
    <nav className="pagination">
      <ul className="paginationList">
        {pageNumbers.map((pageNumber) => {
          return (
            <button type="button" onClick={() => paginate(pageNumber)} key={pageNumber}>
              <li className={pageNumber === currentPage ? 'active' : undefined}>{pageNumber}</li>
            </button>
          )
        })}
      </ul>
    </nav>
  )
}
