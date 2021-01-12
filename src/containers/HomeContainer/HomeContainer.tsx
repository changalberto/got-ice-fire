import React, { useState, useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'wouter'
import { useSearchParam } from 'react-use'

import { getBookCoverImageUrl, BookCoverSize, isArrayEmptyOrNull, getPageNumberFromUriParam } from '../../utilities'
import { RootState, AppDispatch } from '../../store'
import { fetchGotBooks } from '../../store/actions/services.actions'

import DataTable from '../../components/DataTable'
import Pagination from '../../components/Pagination'

export const HomeContainer = () => {
  const { isLoading } = useSelector((state: RootState) => state.layouts)
  const { books } = useSelector((state: RootState) => state.services)
  const dispatch: AppDispatch = useDispatch()
  const pageQuery = useSearchParam('page')
  const pageSizeQuery = useSearchParam('pageSize')

  // Local State
  const [state, setState] = useState({
    currentPage: 0,
    pageSize: 0,
    pageCount: 1,
    nextUri: '',
    prevUri: '',
    lastUri: '',
  })

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
      const pageCount = getPageNumberFromUriParam(lastUri)

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
        {isLoading ? <p>Loading...</p> : <DataTable columns={columns} data={books.results} />}

        <Pagination
          pageCount={state.pageCount}
          currentPage={state.currentPage}
          prevUri={state.prevUri}
          nextUri={state.nextUri}
          lastUri={state.lastUri}
        />
      </div>
    ),
    [books, columns, state, isLoading]
  )
}
