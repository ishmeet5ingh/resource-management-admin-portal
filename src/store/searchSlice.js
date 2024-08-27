import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchTerm: ""
}

export const SearchSlice = createSlice({
    name: "searchTerm",
    initialState,
    reducers: {
        setSearchTerm: (state, action)=>{
            state.searchTerm = action.payload
        }
    },
})

export const {setSearchTerm} = SearchSlice.actions
export default SearchSlice.reducer