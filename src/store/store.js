import {configureStore} from '@reduxjs/toolkit'
import resourcesReducer from './resourcesSlice'
import LoadingReducer from './LoadingSlice'

const store = configureStore({
    reducer: {
        resource: resourcesReducer,
        loader: LoadingReducer
    }
})

export default store
