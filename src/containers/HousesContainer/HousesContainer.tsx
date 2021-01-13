import React, { useState, useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'wouter'
import { useSearchParam } from 'react-use'

import { isArrayEmptyOrNull, getPageNumberFromUriParam, getUriByRel, getLastPathnameFromUrl } from '../../utilities'
import { RootState, AppDispatch } from '../../store'
import { fetchGotHouses } from '../../store/actions/services.actions'

import Page from '../../components/Page'
import DataTable from '../../components/DataTable'
import Pagination from '../../components/Pagination'

export const HousesContainer = () => {
  const { isLoading } = useSelector((state: RootState) => state.layouts)
  const { houses } = useSelector((state: RootState) => state.services)
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
      pageSize: pageSizeQuery !== null ? +pageSizeQuery : 20,
    }))
  }, [pageQuery, pageSizeQuery])

  // Fetch New Books Data when Page Index or Page Size Changes
  useEffect(() => {
    if (state.currentPage && state.pageSize) {
      const housesPromise = dispatch(fetchGotHouses({ page: state.currentPage, pageSize: state.pageSize }))
      return () => {
        housesPromise.abort()
      }
    }
  }, [state.currentPage, state.pageSize, dispatch])

  // Update pagination state when Respnse Header Link state is updated
  useEffect(() => {
    if (!isArrayEmptyOrNull(houses.links)) {
      const nextUri = getUriByRel(houses.links, 'next')
      const prevUri = getUriByRel(houses.links, 'prev')
      const lastUri = getUriByRel(houses.links, 'last')
      const pageCount = getPageNumberFromUriParam(lastUri)

      setState(state => ({ ...state, nextUri, prevUri, lastUri, pageCount }))
    }
  }, [houses.links])

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
          const houseId = getLastPathnameFromUrl(original.url)
          return <Link href={`/house/${houseId}`}>{original.name}</Link>
        },
      },
      {
        Header: 'Region',
        accessor: 'region',
      },
      {
        Header: 'Coat of Arms',
        accessor: 'coatOfArms',
      },
      {
        Header: 'Words',
        accessor: 'words',
      },
      {
        Header: 'Titles',
        accessor: 'titles', // Array
      },
      {
        Header: 'Seats',
        accessor: 'seats', // Array
      },
      {
        Header: 'Current Lord',
        accessor: 'currentLord',
      },
      {
        Header: 'Heir',
        accessor: 'heir',
      },
      {
        Header: 'Overlord',
        accessor: 'overlord',
      },
      {
        Header: 'Founded',
        accessor: 'founded',
      },
      {
        Header: 'Founder',
        accessor: 'founder',
      },
      {
        Header: 'Died Out',
        accessor: 'diedOut',
      },
      {
        Header: 'Ancestral Weapons',
        accessor: 'ancestralWeapons', // Array
      },
      {
        Header: 'Cadet Branches',
        accessor: 'cadetBranches', // Array
      },
      {
        Header: 'Sworn Members',
        accessor: 'swornMembers', // Array
      },
    ],
    []
  )

  return React.useMemo(
    () => (
      <Page title="GOT | Houses" className="houses" isLoading={isLoading}>
        <DataTable columns={columns} data={houses.results} />
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
    [houses, columns, isLoading, state]
  )
}
