import React from 'react'
import Resource from './Resource'
import { useSelector } from 'react-redux'
import { usePagination } from '../hooks'
import PaginationButtons from './PaginationButtons'

// https://media-content.ccbp.in/website/react-assignment/resources.json
function Users() {
    let data = useSelector((state) => state.resource.resources)
    data = data?.filter((item) => item.tag === "user")
    const searchTerm = useSelector(state => state.searchTerm.searchTerm)


    const {
        currentPage,
        totalPages,
        currentItems,
        goToNextPage,
        goToPreviousPage,
      } = usePagination(data);

      const filteredData = currentItems?.filter((dataItem) =>
        dataItem.title?.toLowerCase().includes(searchTerm.toLowerCase())
      );
  return (
    <div>
   <div className="grid lg:grid-cols-3 gap-7 sm:grid-cols-2">
        {filteredData?.map((dataItem)=>(
            <Resource key={dataItem.id} dataItem={dataItem}/>
        ))}
    </div>
    <PaginationButtons
        goToNextPage={goToNextPage}
        goToPreviousPage={goToPreviousPage}
        currentPage={currentPage}
        totalPages={totalPages}
    />
    </div>
  )
}

export default Users
