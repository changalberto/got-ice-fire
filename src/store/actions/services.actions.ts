import { createAsyncThunk } from '@reduxjs/toolkit'
import LinkHeader from 'http-link-header'

import { Pagination } from '../../models'
import { gotApi } from '../../services/gotApi.service'

export const fetchGotBooks = createAsyncThunk('@fetch/fetchGotBooks', async (params?: Pagination) => {
  const response = await gotApi.getBooks(params)
  const { data } = response
  const { refs } = LinkHeader.parse(response.headers.link)
  return { results: data, links: refs }
})

export const fetchGotBooksByUri = createAsyncThunk('@fetch/fetchGotBooksByUri', async (uri: string) => {
  const response = await gotApi.getDataByUri(uri)
  const { data } = response
  const { refs } = LinkHeader.parse(response.headers.link)
  return { results: data, links: refs }
})

export const fetchGotHouses = createAsyncThunk('@fetch/fetchGotHouses', async (params?: Pagination) => {
  const response = await gotApi.getHouses(params)
  const { data } = response
  const { refs } = LinkHeader.parse(response.headers.link)
  return { results: data, links: refs }
})

export const fetchGotHouseById = createAsyncThunk('@fetch/fetchGotHouseById', async (id: string) => {
  const response = await gotApi.getHouseById(id)
  const { data } = response
  return data
})

export const fetchGotCharacters = createAsyncThunk('@fetch/getGotCharacters', async (params?: Pagination) => {
  const response = await gotApi.getCharacters(params)
  const { data } = response
  const { refs } = LinkHeader.parse(response.headers.link)
  return { results: data, links: refs }
})

export const fetchGotCharacterById = createAsyncThunk('@fetch/fetchGotCharacterById', async (id: string) => {
  const response = await gotApi.getCharacterById(id)
  const { data } = response
  return data
})
