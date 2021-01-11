import { createSlice } from '@reduxjs/toolkit'

import { IBook, IHouse, ICharacter } from '../../models'
import { fetchGotBooks, fetchGotHouses, fetchGotCharacter } from '../actions/services.actions'

export const servicesSlice = createSlice({
  name: 'services',
  initialState: {
    books: [] as IBook[],
    houses: [] as IHouse[],
    character: {} as ICharacter,
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
    [`${fetchGotCharacter.fulfilled}`]: (state, { payload }) => {
      state.character = payload
    },
  },
})

export default servicesSlice.reducer
