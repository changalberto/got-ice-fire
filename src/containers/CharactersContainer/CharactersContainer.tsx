import React, { useState, useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'wouter'
import { useSearchParam } from 'react-use'

import {
  isArrayEmptyOrNull,
  getPageNumberFromUriParam,
  getUriByRel,
  getLastPathnameFromUrl,
  isStringEmptyOrNull,
} from '../../utilities'
import { RootState, AppDispatch } from '../../store'
import { fetchGotCharacters } from '../../store/actions/services.actions'

import DataTable from '../../components/DataTable'
import Pagination from '../../components/Pagination'

export const CharactersContainer = () => {
  const { isLoading } = useSelector((state: RootState) => state.layouts)
  const { characters } = useSelector((state: RootState) => state.services)
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

  // Deeplinking query param change effect
  // NOTE: Use querystring param as the source of truth to change page number
  useEffect(() => {
    setState(state => ({
      ...state,
      currentPage: pageQuery !== null ? +pageQuery : 1,
      pageSize: pageSizeQuery !== null ? +pageSizeQuery : 30,
    }))
  }, [pageQuery, pageSizeQuery])

  // Fetch New Books Data when Page Index or Page Size Changes
  useEffect(() => {
    if (state.currentPage && state.pageSize) {
      const housesPromise = dispatch(fetchGotCharacters({ page: state.currentPage, pageSize: state.pageSize }))
      return () => {
        housesPromise.abort()
      }
    }
  }, [state.currentPage, state.pageSize, dispatch])

  // Update pagination state when Respnse Header Link state is updated
  useEffect(() => {
    if (!isArrayEmptyOrNull(characters.links)) {
      const nextUri = getUriByRel(characters.links, 'next')
      const prevUri = getUriByRel(characters.links, 'prev')
      const lastUri = getUriByRel(characters.links, 'last')
      const pageCount = getPageNumberFromUriParam(lastUri)

      setState(state => ({ ...state, nextUri, prevUri, lastUri, pageCount }))
    }
  }, [characters.links])

  // Table Columns Config
  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
        Cell: (props: any) => {
          const {
            row: { original },
          } = props
          const characterId = getLastPathnameFromUrl(original.url)
          return (
            <Link href={`/characters/${characterId}`}>
              {isStringEmptyOrNull(original.name) ? 'N/A' : original.name}
            </Link>
          )
        },
      },
    ],
    []
  )

  return useMemo(
    () => (
      <div className="characters">
        {isLoading ? <p>Loading...</p> : <DataTable columns={columns} data={characters.results} />}

        <Pagination
          pageCount={state.pageCount}
          currentPage={state.currentPage}
          pageSize={state.pageSize}
          prevUri={state.prevUri}
          nextUri={state.nextUri}
          lastUri={state.lastUri}
        />
      </div>
    ),
    [characters, columns, state, isLoading]
  )
}
