import React, { useState, useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  getBookCoverImageUrl,
  BookCoverSize,
  isArrayEmptyOrNull,
  getPageNumberFromUriParam,
  getUriByRel,
  getLastPathnameFromUrl,
} from '../../utilities'
import { RootState, AppDispatch } from '../../store'
import { fetchGotBooks } from '../../store/actions/services.actions'

import { useQuery } from '../../hooks/useQuery'
import Page from '../../components/Page'
import DataTable from '../../components/DataTable'
import Pagination from '../../components/Pagination'

export const HomeContainer = () => {
  const query = useQuery()
  const { isLoading } = useSelector((state: RootState) => state.layouts)
  const { books } = useSelector((state: RootState) => state.services)
  const dispatch: AppDispatch = useDispatch()
  const pageQuery = query.get('page')
  const pageSizeQuery = query.get('pageSize')

  // Local State
  const [state, setState] = useState({
    currentPage: 0,
    pageSize: 0,
    pageCount: 1,
    nextUri: '',
    prevUri: '',
    lastUri: '',
  })

  // Deeplinking query param change effect
  // NOTE: Use querystring param as the source of truth to change page number
  useEffect(() => {
    setState(state => ({
      ...state,
      currentPage: pageQuery !== null ? +pageQuery : 1,
      pageSize: pageSizeQuery !== null ? +pageSizeQuery : 5,
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
      const nextUri = getUriByRel(books.links, 'next')
      const prevUri = getUriByRel(books.links, 'prev')
      const lastUri = getUriByRel(books.links, 'last')
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
            <Link to={`/book/${getLastPathnameFromUrl(original.url)}`}>
              <img
                className="thumbnail"
                src={getBookCoverImageUrl(original.isbn, BookCoverSize.Medium)}
                alt={original.name}
              />
            </Link>
          )
        },
      },
      {
        Header: 'Title',
        accessor: 'name',
        Cell: (props: any) => {
          const {
            row: { original },
          } = props
          return <Link to={`/book/${getLastPathnameFromUrl(original.url)}`}>{original.name}</Link>
        },
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

  return React.useMemo(
    () => (
      <Page title="GOT | Books" className="books" isLoading={isLoading}>
        <DataTable
          columns={columns}
          data={books.results}
          initialState={{
            sortBy: [
              {
                id: 'name',
                desc: false,
              },
            ],
          }}
        />

        <Pagination
          pageCount={state.pageCount}
          currentPage={state.currentPage}
          pageSize={state.pageSize}
          prevUri={state.prevUri}
          nextUri={state.nextUri}
          lastUri={state.lastUri}
        />
      </Page>
    ),
    [books, columns, isLoading, state]
  )
}
