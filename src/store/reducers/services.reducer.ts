import { createSlice } from '@reduxjs/toolkit'

import { fetchGotBooks, fetchGotHouses } from '../actions/services.actions'

export const servicesSlice = createSlice({
  name: 'services',
  initialState: {
    books: [],
    houses: [],
    characters: [],
  },
  reducers: {},
  // Thunks
  extraReducers: {
    [`${fetchGotBooks.fulfilled}`]: (state, { payload }) => {
      state.books = payload
    },
    [`${fetchGotHouses.fulfilled}`]: (state, { payload }) => {
      state.houses = payload
    },
  },
})

export default servicesSlice.reducer
