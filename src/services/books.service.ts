import { IBook } from '../models'
import useFetch from 'use-http'

import { ICE_FIRE_ENDPOINT_URL, REST_CACHE_LIFE } from '../constants'

export const useFetchBooks = (): IBook[] => {
  const url = `${ICE_FIRE_ENDPOINT_URL}/books`
  const { data: books = [] } = useFetch(url, { cacheLife: REST_CACHE_LIFE, persist: true }, [])
  return books
}
