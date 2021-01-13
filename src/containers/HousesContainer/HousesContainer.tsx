import React, { useState, useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { isArrayEmptyOrNull, getPageNumberFromUriParam, getUriByRel, getLastPathnameFromUrl } from '../../utilities'
import { RootState, AppDispatch } from '../../store'
import { fetchGotHouses } from '../../store/actions/services.actions'
import { linkCrawl, linksCrawl } from '../../helpers/LinkCrawl'

import { useQuery } from '../../hooks/useQuery'
import Page from '../../components/Page'
import DataTable from '../../components/DataTable'
import Pagination from '../../components/Pagination'

export const HousesContainer = () => {
  const query = useQuery()
  const { isLoading } = useSelector((state: RootState) => state.layouts)
  const { houses } = useSelector((state: RootState) => state.services)
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
          return <Link to={`/house/${houseId}`}>{original.name}</Link>
        },
      },
      {
        Header: 'Region',
        accessor: 'region',
      },
      {
        Header: 'Overlord',
        accessor: 'overlord',
        Cell: (props: any) => linkCrawl(props.value, 'character', 'name'),
      },
      {
        Header: 'Current Lord',
        accessor: 'currentLord',
        Cell: (props: any) => linkCrawl(props.value, 'character', 'name'),
      },
      {
        Header: 'Heir',
        accessor: 'heir',
        Cell: (props: any) => linkCrawl(props.value, 'character', 'name'),
      },
      {
        Header: 'Details',
        accessor: 'titles', // Array
        maxWidth: 300,
        Cell: (props: any) => {
          const {
            row: { original },
          } = props
          return (
            <>
              <div className="founded">
                <h3>Founded</h3>
                {original.founded ?? 'N/A'}
              </div>
              <div className="founder">
                <h3>Founder</h3>
                {original.founder ? linkCrawl(original.founder, 'character', 'name') : 'N/A'}
              </div>
              <div className="titles">
                <h3>Titles</h3>
                {!isArrayEmptyOrNull(original.titles)
                  ? original.titles.map((title: string) => <p key={title}>{title}</p>)
                  : 'N/A'}
              </div>
              <div className="coat-of-arms">
                <h3>Coat of Arms</h3>
                {original.coatOfArms}
              </div>
              <div className="words">
                <h3>Words</h3>
                {original.words}
              </div>
              <div className="sworn-members">
                <h3>Sworn Members</h3>
                {original.swornMembers ? linksCrawl(original.swornMembers, 'character', 'name') : 'N/A'}
              </div>
            </>
          )
        },
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
