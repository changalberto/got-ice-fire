import axios from 'axios'
import { setupCache } from 'axios-cache-adapter'
import localforage from 'localforage'

import { Pagination } from '../models'
import { ICE_FIRE_ENDPOINT_URL, REST_CACHE_LIFE } from '../constants'

const forageStore = localforage.createInstance({
  driver: [localforage.INDEXEDDB, localforage.LOCALSTORAGE],
  name: 'got-cache',
})

const http = axios.create({
  baseURL: ICE_FIRE_ENDPOINT_URL,
  adapter: setupCache({ maxAge: REST_CACHE_LIFE, store: forageStore }).adapter,
})

export const gotApi = {
  getBooks: async (params?: Pagination) => {
    return http.get(`${ICE_FIRE_ENDPOINT_URL}/books`, { params })
  },
  getBookById: async (id: string) => {
    return http.get(`${ICE_FIRE_ENDPOINT_URL}/books/${id}`)
  },
  getHouses: async (params?: Pagination) => {
    return http.get(`${ICE_FIRE_ENDPOINT_URL}/houses`, { params })
  },
  getHouseById: async (id?: string) => {
    return http.get(`${ICE_FIRE_ENDPOINT_URL}/characters/${id}`)
  },
  getCharacters: async (params?: Pagination) => {
    return http.get(`${ICE_FIRE_ENDPOINT_URL}/characters`, { params })
  },
  getCharacterById: async (id?: string) => {
    return http.get(`${ICE_FIRE_ENDPOINT_URL}/characters/${id}`)
  },
  getDataByUri: async (uri: string, params = {}) => {
    return http.get(uri, { ...params })
  },
}
