import {configureStore} from '@reduxjs/toolkit'
import resourcesReducer from './resourcesSlice'
import LoadingReducer from './LoadingSlice'
import searchReducer from './searchSlice'

const store = configureStore({
    reducer: {
        resource: resourcesReducer,
        loader: LoadingReducer,
        searchTerm: searchReducer,
    }
})

export default store
