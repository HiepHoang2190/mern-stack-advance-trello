import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

function CustomPagination({ totalPages, itemsPerPage=12, currentPage=1 }) {
  const [pageCount, setPageCount] = useState(1)

  useEffect(() => {
    setPageCount(Math.ceil(totalPages / itemsPerPage))
  }, [totalPages, itemsPerPage])

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    console.log(`User requested page number ${(event.selected + 1)}`)
  }

  return (
    <ReactPaginate
      initialPage={(currentPage-1)}

      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="< previous"
      renderOnZeroPageCount={null}

      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item previous"
      previousLinkClassName="page-link previous-link"
      nextClassName="page-item next"
      nextLinkClassName="page-link next-link"
      breakClassName="page-item break"
      breakLinkClassName="page-link break-link"
      containerClassName="pagination"
      activeClassName="active"
    />
  )
}

export default CustomPagination
