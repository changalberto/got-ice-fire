import { OPEN_LIBRARY_COVER_URL } from '../constants'

export enum BookCoverSize {
  Small = 'S',
  Medium = 'M',
  Large = 'L',
}

export const getBookCoverImageUrl = (isbn: string, size = BookCoverSize.Small): string =>
  `${OPEN_LIBRARY_COVER_URL}/${isbn}-${size}.jpg`
