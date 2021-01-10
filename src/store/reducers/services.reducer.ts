import { createSlice } from '@reduxjs/toolkit'

import { fetchGotBooks } from '../actions/services.actions'

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
    [`${fetchGotBooks.fulfilled}`]: (state, action) => {
      state.books = action.payload
    },
  },
})

export default servicesSlice.reducer
