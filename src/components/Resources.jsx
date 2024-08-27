import React, { useState } from "react";
import { useSelector } from "react-redux";
import { usePagination } from "../hooks";
import { PaginationButtons, Resource, Search } from "../components";

function Resources() {
  let data = useSelector((state) => state.resource.resources);
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
        {filteredData?.map((dataItem) => (
          <Resource key={dataItem.id} dataItem={dataItem} />
        ))}
      </div>
      <PaginationButtons
        goToNextPage={goToNextPage}
        goToPreviousPage={goToPreviousPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default Resources;
