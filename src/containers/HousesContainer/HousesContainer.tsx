import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'wouter'
import { useSearchParam } from 'react-use'

import {
  getBookCoverImageUrl,
  BookCoverSize,
  isArrayEmptyOrNull,
  isStringEmptyOrNull,
  historyPushQueryParams,
} from '../../utilities'
import { RootState, AppDispatch } from '../../store'
import { fetchGotBooks } from '../../store/actions/services.actions'

import BooksTable from '../../components/BooksTable'

export const HousesContainer = () => {
  const { isLoading } = useSelector((state: RootState) => state.layouts)
  const { books } = useSelector((state: RootState) => state.services)
  const dispatch: AppDispatch = useDispatch()
  const pageQuery = useSearchParam('page')
  const pageSizeQuery = useSearchParam('pageSize')

  const [state, setState] = useState({
    currentPage: 0,
    pageSize: 0,
    pageCount: 1,
    nextUri: '',
    prevUri: '',
    lastUri: '',
  })

  const handleGotoPageByNumber = useCallback((e: React.MouseEvent<HTMLButtonElement>, number: number) => {
    e.preventDefault()
    historyPushQueryParams('page', `${number}`)
  }, [])

  /**
   * Filter Links for Uri by Rel value
   * @private
   * @param links
   * @param rel
   */
  const _getUriByRel = (links: any[], rel: string): string => {
    const [link]: { uri: string; rel: string }[] = links.filter((link: any) => link.rel === rel)
    return link ? link.uri : ''
  }

  /**
   * Return the page number from url param
   * @priave
   * @param uri
   */
  const _getPageNumberFromUriParam = (uri: string): number => {
    const pageNumber = new URL(uri).searchParams.get('page')
    return pageNumber ? +pageNumber : 0
  }

  // Deeplinking query param change effect
  // NOTE: Use querystring param as the source of truth to change page number
  useEffect(() => {
    setState(state => ({
      ...state,
      currentPage: pageQuery !== null ? +pageQuery : 1,
      pageSize: pageSizeQuery !== null ? +pageSizeQuery : 3,
    }))
  }, [pageQuery, pageSizeQuery])

  // Fetch New Books Data when Page Index or Page Size Changes
  useEffect(() => {
    if (state.currentPage && state.pageSize) {
      const booksPromise = dispatch(fetchGotBooks({ page: state.currentPage, pageSize: state.pageSize }))
      return () => {
        booksPromise.abort()
      }
    }
  }, [state.currentPage, state.pageSize, dispatch])

  // Update pagination state when Respnse Header Link state is updated
  useEffect(() => {
    if (!isArrayEmptyOrNull(books.links)) {
      const nextUri = _getUriByRel(books.links, 'next')
      const prevUri = _getUriByRel(books.links, 'prev')
      const lastUri = _getUriByRel(books.links, 'last')
      const pageCount = _getPageNumberFromUriParam(lastUri)

      setState(state => ({ ...state, nextUri, prevUri, lastUri, pageCount }))
    }
  }, [books.links])

  // Table Columns Config
  const columns = useMemo(
    () => [
      {
        Header: '',
        accessor: 'isbn',
        Cell: (props: any) => {
          const {
            row: { original },
          } = props
          // Render Image
          return (
            <Link href={`/book/${original.isbn}`}>
              <img src={getBookCoverImageUrl(original.isbn, BookCoverSize.Medium)} alt={original.name} />
            </Link>
          )
        },
      },
      {
        Header: 'Title',
        accessor: 'name',
      },
      {
        Header: 'Authors',
        accessor: 'authors',
      },
      {
        Header: 'Release Date',
        accessor: 'released',
      },
      {
        Header: 'Publisher',
        accessor: 'publisher',
      },
      {
        Header: 'Country',
        accessor: 'country',
      },
      {
        Header: 'Format',
        accessor: 'mediaType',
      },
      {
        Header: 'Page',
        accessor: 'numberOfPages',
        Cell: (props: any) => {
          const { value } = props
          // Render Image
          return <span>{value} pages</span>
        },
      },
    ],
    []
  )

  return useMemo(
    () => (
      <div className="Home">
        {isLoading ? <p>Loading...</p> : <BooksTable columns={columns} books={books.results} />}

        <div className="pagination">
          <button
            onClick={e => handleGotoPageByNumber(e, _getPageNumberFromUriParam(state.prevUri))}
            disabled={isStringEmptyOrNull(state.prevUri)}
          >
            Prev
          </button>

          {state.pageCount > 0 &&
            Array.from(Array(state.pageCount).keys()).map(index => (
              <button
                key={`page-${index}`}
                onClick={e => handleGotoPageByNumber(e, index + 1)}
                disabled={state.currentPage === index + 1}
              >
                {index + 1}
              </button>
            ))}

          {!isStringEmptyOrNull(state.lastUri) && (
            <button
              onClick={e => handleGotoPageByNumber(e, _getPageNumberFromUriParam(state.lastUri))}
              disabled={state.currentPage === _getPageNumberFromUriParam(state.lastUri)}
            >
              Last
            </button>
          )}

          <button
            onClick={e => handleGotoPageByNumber(e, _getPageNumberFromUriParam(state.nextUri))}
            disabled={isStringEmptyOrNull(state.nextUri)}
          >
            Next
          </button>
        </div>
      </div>
    ),
    [books, columns, state, handleGotoPageByNumber, isLoading]
  )
}
