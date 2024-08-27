import React from "react";

import { useSelector } from "react-redux";
import { usePagination } from "../hooks";
import { PaginationButtons, Resource } from "../components";

function Resources() {
  let data = useSelector((state) => state.resource.resources);

  const itemsPerPage = 6;
  const {
    currentPage,
    totalPages,
    currentItems,
    goToNextPage,
    goToPreviousPage,
  } = usePagination(data, itemsPerPage);

  return (
    <div>
      <div className="grid lg:grid-cols-3 gap-7 sm:grid-cols-2">
        {currentItems?.map((dataItem) => (
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
