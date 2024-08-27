import React from 'react'

function PaginationButtons({goToNextPage, goToPreviousPage, currentPage, totalPages}) {
  return (
    <div className="flex justify-center w-full pt-3 pb-10">
        <button
          className={`px-4 py-2 mr-2 rounded ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="px-4">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          className={`px-4 py-2 ml-2 rounded ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
  )
}

export default PaginationButtons