import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { SubscriptionsSliceReducer } from './rootSlice'

const reducers = combineReducers({
  subscribe: SubscriptionsSliceReducer,
})

export const store = configureStore({
  reducer: reducers,
})
