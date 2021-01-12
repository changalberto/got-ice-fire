import { createSlice } from '@reduxjs/toolkit'

import { IBook, IHouse, ICharacter } from '../../models'
import { fetchGotBooks, fetchGotBooksByUri, fetchGotHouses, fetchGotCharacters } from '../actions/services.actions'

export const servicesSlice = createSlice({
  name: 'services',
  initialState: {
    books: {
      results: [] as IBook[],
      links: [],
    },
    houses: {
      results: [] as IHouse[],
      links: [],
    },
    characters: {
      results: [] as ICharacter[],
      links: [],
    },
  },
  reducers: {},
  // Thunks
  extraReducers: {
    [`${fetchGotBooks.fulfilled}`]: (state, { payload }) => {
      state.books.results = payload.results
      state.books.links = payload.links
    },
    [`${fetchGotBooksByUri.fulfilled}`]: (state, { payload }) => {
      state.books.results = payload.results
      state.books.links = payload.links
    },
    [`${fetchGotHouses.fulfilled}`]: (state, { payload }) => {
      state.houses.results = payload.results
      state.houses.links = payload.links
    },
    [`${fetchGotCharacters.fulfilled}`]: (state, { payload }) => {
      state.characters.results = payload.results
      state.characters.links = payload.links
    },
  },
})

export default servicesSlice.reducer
