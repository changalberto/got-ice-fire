import { createAsyncThunk } from '@reduxjs/toolkit'

import { gotApi } from '../../services/gotApi.service'

export const fetchGotBooks = createAsyncThunk('@fetch/fetchGotBooks', async () => {
  const { data } = await gotApi.getBooks()
  return data
})

export const fetchGotHouses = createAsyncThunk('@fetch/fetchGotHouses', async () => {
  const { data } = await gotApi.getHouses()
  return data
})
