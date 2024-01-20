import { configureStore } from '@reduxjs/toolkit'
import queryReducer from './slices/search.slice'


export default configureStore({
  reducer: {
    query: queryReducer,
  },
})