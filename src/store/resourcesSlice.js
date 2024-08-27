import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    resources: null,
}

export const ResoucesSlice = createSlice({
    name: "resource",
    initialState,
    reducers: {
        setResources: (state, action) => {
            state.resources = action.payload
            console.log(state.resources)
        },

        addResource: (state, action) => {
            const resource = action.payload
            state.push(resource)
        }
    }
})

export const {setResources, addResource} = ResoucesSlice.actions
export default ResoucesSlice.reducer
