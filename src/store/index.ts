import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import layouts from './reducers/layouts'

const rootReducer = combineReducers({
  layouts,
})

const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default store
