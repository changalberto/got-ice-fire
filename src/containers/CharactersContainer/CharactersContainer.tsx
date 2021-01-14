import React, { useState, useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  isArrayEmptyOrNull,
  getPageNumberFromUriParam,
  getUriByRel,
  getLastPathnameFromUrl,
  isStringEmptyOrNull,
  getStringValueOrNa,
} from '../../utilities'
import { RootState, AppDispatch } from '../../store'
import { fetchGotCharacters } from '../../store/actions/services.actions'
import { linkCrawlHelper, linksCrawlHelper } from '../../helpers/LinkCrawlHelper'

import { useQuery } from '../../hooks/useQuery'
import Page from '../../components/Page'
import DataTable, { SelectColumnFilter } from '../../components/DataTable'
import Pagination from '../../components/Pagination'

export const CharactersContainer = () => {
  const query = useQuery()
  const { isLoading } = useSelector((state: RootState) => state.layouts)
  const { characters } = useSelector((state: RootState) => state.services)
  const dispatch: AppDispatch = useDispatch()
  const pageQuery = query.get('page')
  const pageSizeQuery = query.get('pageSize')

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
            <>
              <Link className="link" to={`/character/${characterId}`}>
                {getStringValueOrNa(original.name)}
              </Link>
              {!isArrayEmptyOrNull(original.aliases) && (
                <div className="aliases">
                  <h5>Aliases:</h5>
                  {original.aliases.map((alias: string) => (
                    <p key={alias}>{alias}</p>
                  ))}
                </div>
              )}
            </>
          )
        },
      },
      {
        Header: 'Gender',
        accessor: 'gender',
        Filter: SelectColumnFilter,
        disableSortBy: true,
        filter: 'includes',
      },
      {
        Header: 'Culture',
        accessor: 'culture',
        Filter: SelectColumnFilter,
        disableSortBy: true,
        filter: 'includes',
      },
      {
        Header: 'Family',
        accessor: 'father',
        Cell: (props: any) => {
          const {
            row: { original },
          } = props
          return (
            <div>
              {!isStringEmptyOrNull(original.father) && (
                <span>Father {linkCrawlHelper(original.father, 'character', 'name')}</span>
              )}
              {!isStringEmptyOrNull(original.mother) && (
                <span>Mother {linkCrawlHelper(original.mother, 'character', 'name')}</span>
              )}
              {!isStringEmptyOrNull(original.spouse) && (
                <span>Spouse {linkCrawlHelper(original.spouse, 'character', 'name')}</span>
              )}
            </div>
          )
        },
      },
      {
        Header: 'Allegiances',
        accessor: 'allegiances', // Array
        Cell: (props: any) => linksCrawlHelper(props.value, 'house', 'name'),
      },
      {
        Header: 'Books',
        accessor: 'books', // Array
        Cell: (props: any) => linksCrawlHelper(props.value, 'book', 'name'),
        Filter: SelectBookFilter,
        filter: 'includes',
        disableSortBy: true,
      },
      {
        Header: 'POV Books',
        accessor: 'povBooks', // Array
        Cell: (props: any) => linksCrawlHelper(props.value, 'book', 'name'),
      },
      // {
      //   Header: 'TV Series',
      //   accessor: 'tvSeries', // Array
      // },
      // {
      //   Header: 'Played By',
      //   accessor: 'playedBy', // Array
      // },
    ],
    []
  )

  return useMemo(
    () => (
      <Page title="GOT | Characters" className="characters" isLoading={isLoading}>
        <DataTable columns={columns} data={characters.results} />
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
    [characters, columns, state, isLoading]
  )
}

export const SelectBookFilter = ({ column: { filterValue, setFilter, preFilteredRows, id } }: any) => {
  const options = React.useMemo(() => {
    const options: any = new Set()
    preFilteredRows.forEach((row: any) => {
      !isArrayEmptyOrNull(row.values[id]) &&
        row.values[id].forEach((bookUri: string) => {
          options.add(bookUri)
        })
    })
    return [...options]
  }, [id, preFilteredRows])

  return (
    <select
      value={filterValue}
      onChange={e => e.currentTarget.blur()}
      onBlur={e => {
        setFilter(e.target.value || undefined)
      }}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {`Book ${getLastPathnameFromUrl(option)}`}
        </option>
      ))}
    </select>
  )
}
