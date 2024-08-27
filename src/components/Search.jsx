import React from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../store/searchSlice";

function Search() {
    const dispatch = useDispatch()
    const searchTerm = useSelector(state => state.searchTerm.searchTerm)
    console.log("searchTerm", searchTerm)
    
  return (
    <div>
      <div className="flex lg:w-[648px] md:w-[500px] sm:w-[400px] w-[300px] my-9 pl-4 gap-3 items-center border border-[#D7DFE9] bg-white">
        <FaSearch />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          className="w-full h-10 focus:outline-none"
          placeholder="Search"
        />
      </div>
    </div>
  );
}

export default Search;
