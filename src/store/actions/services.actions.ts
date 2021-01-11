import { createAsyncThunk } from '@reduxjs/toolkit'

import { gotApi } from '../../services/gotApi.service'

export const fetchGotBooks = createAsyncThunk('@fetch/fetchGotBooks', async () => {
  const { data } = await gotApi.getBooks()
  return data
})

export const fetchGotHouses = createAsyncThunk('@fetch/fetchGotHouses', async () => {
  const response = await gotApi.getHouses()
  const { data } = response
  return data
})

export const fetchGotCharacter = createAsyncThunk('@fetch/getGotCharacter', async (uri: string) => {
  const response = await gotApi.getCharacterByUri(uri)
  const { data } = response
  return data
})
