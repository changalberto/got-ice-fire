import { useHistory } from 'react-router-dom'
import { OPEN_LIBRARY_COVER_URL } from '../constants'

export enum BookCoverSize {
  Small = 'S',
  Medium = 'M',
  Large = 'L',
}

/**
 * Ruturns Open Library Image URL
 * @param isbn {String}
 * @param size {String}
 */
export const getBookCoverImageUrl = (isbn: string, size = BookCoverSize.Small): string =>
  `${OPEN_LIBRARY_COVER_URL}/${isbn}-${size}.jpg`

/**
 * Ruturns an array of paths
 * @param uri {String}
 * @returns {Array}
 */
export const getPathsFromUri = (uri: string): string[] => new URL(uri).pathname.split('/')

/**
 * Returns true or false
 * @param array {Array}
 */
export const isArrayEmptyOrNull = (array: any[]): boolean => !array || (array && array.length === 0)

/**
 * Returns last item of the array
 * @param array {Array}
 */
export const getArrayLastItem = (array: any[]): any => (!isArrayEmptyOrNull(array) ? array[array.length - 1] : null)

/**
 * Returns true or false
 * @param value {String | null | undefined}
 */
export const isStringEmptyOrNull = (value: string | null | undefined): boolean => value === null || value?.length === 0

/**
 * Go back in Browser History
 */
export const historyGoBack = (): void => {
  window.history.back()
}

/**
 * Return the page number from url param
 * @param uri
 */
export const getPageNumberFromUriParam = (uri: string | null | undefined): number => {
  const pageNumber = new URL(uri ?? '').searchParams.get('page')
  return pageNumber ? +pageNumber : 0
}

/**
 * Filter Links for Uri by Rel value
 * @param links
 * @param rel
 */
export const getUriByRel = (links: any[], rel: string): string => {
  const [link]: { uri: string; rel: string }[] = links.filter((link: any) => link.rel === rel)
  return link ? link.uri : ''
}

/**
 * Extract the last path of url path
 * Returns String
 * @param url
 */
export const getLastPathnameFromUrl = (url: string): string | null => {
  const pathname = new URL(url).pathname
  return getArrayLastItem(pathname.split('/'))
}
