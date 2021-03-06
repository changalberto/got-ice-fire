import { createSlice } from '@reduxjs/toolkit'

import {
  fetchGotBooks,
  fetchGotBookById,
  fetchGotBooksByUri,
  fetchGotHouses,
  fetchGotHouseById,
  fetchGotCharacters,
  fetchGotCharacterById,
} from '../actions/services.actions'

type State = {
  breakpoint: string | null
  isLoading: boolean
}

const setLoadingReducer = (state: State, isLoading: boolean) => {
  state.isLoading = isLoading
}

export const layoutsSlice = createSlice({
  name: 'layouts',
  initialState: {
    breakpoint: null,
    isLoading: false,
  },
  reducers: {
    breakpointChange: (state, action) => {
      state.breakpoint = action.payload
    },
  },
  // Thunks
  extraReducers: {
    [`${fetchGotBooks.pending}`]: state => setLoadingReducer(state, true),
    [`${fetchGotBookById.pending}`]: state => setLoadingReducer(state, true),
    [`${fetchGotBooksByUri.pending}`]: state => setLoadingReducer(state, true),
    [`${fetchGotHouses.pending}`]: state => setLoadingReducer(state, true),
    [`${fetchGotHouseById.pending}`]: state => setLoadingReducer(state, true),
    [`${fetchGotCharacters.pending}`]: state => setLoadingReducer(state, true),
    [`${fetchGotCharacterById.pending}`]: state => setLoadingReducer(state, true),

    [`${fetchGotBooks.fulfilled}`]: state => setLoadingReducer(state, false),
    [`${fetchGotBookById.fulfilled}`]: state => setLoadingReducer(state, false),
    [`${fetchGotBooksByUri.fulfilled}`]: state => setLoadingReducer(state, false),
    [`${fetchGotHouses.fulfilled}`]: state => setLoadingReducer(state, false),
    [`${fetchGotHouseById.fulfilled}`]: state => setLoadingReducer(state, false),
    [`${fetchGotCharacters.fulfilled}`]: state => setLoadingReducer(state, false),
    [`${fetchGotCharacterById.fulfilled}`]: state => setLoadingReducer(state, false),

    [`${fetchGotBooks.rejected}`]: state => setLoadingReducer(state, false),
    [`${fetchGotBookById.rejected}`]: state => setLoadingReducer(state, false),
    [`${fetchGotBooksByUri.rejected}`]: state => setLoadingReducer(state, false),
    [`${fetchGotHouses.rejected}`]: state => setLoadingReducer(state, false),
    [`${fetchGotHouseById.rejected}`]: state => setLoadingReducer(state, false),
    [`${fetchGotCharacters.rejected}`]: state => setLoadingReducer(state, false),
    [`${fetchGotCharacterById.rejected}`]: state => setLoadingReducer(state, false),
  },
})

export default layoutsSlice.reducer
