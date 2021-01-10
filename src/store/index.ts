import { configureStore, Action } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { ThunkAction } from 'redux-thunk'

import layouts from './reducers/layouts.reducer'
import services from './reducers/services.reducer'

const rootReducer = combineReducers({
  layouts,
  services,
})

const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export default store
