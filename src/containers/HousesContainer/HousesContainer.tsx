import React, { useState, useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'wouter'
import { useSearchParam } from 'react-use'

import { isArrayEmptyOrNull, getPageNumberFromUriParam } from '../../utilities'
import { RootState, AppDispatch } from '../../store'
import { fetchGotHouses } from '../../store/actions/services.actions'

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
      const housesPromise = dispatch(fetchGotHouses({ page: state.currentPage, pageSize: state.pageSize }))
      return () => {
        housesPromise.abort()
      }
    }
  }, [state.currentPage, state.pageSize, dispatch])

  // Update pagination state when Respnse Header Link state is updated
  useEffect(() => {
    if (!isArrayEmptyOrNull(houses.links)) {
      const nextUri = _getUriByRel(houses.links, 'next')
      const prevUri = _getUriByRel(houses.links, 'prev')
      const lastUri = _getUriByRel(houses.links, 'last')
      const pageCount = getPageNumberFromUriParam(lastUri)

      setState(state => ({ ...state, nextUri, prevUri, lastUri, pageCount }))
    }
  }, [houses.links])

  // Table Columns Config
  const columns = useMemo(
    () => [
      {
        Header: 'Title',
        accessor: 'name',
      },
    ],
    []
  )

  return useMemo(
    () => (
      <div className="Home">
        {isLoading ? <p>Loading...</p> : <DataTable columns={columns} data={houses.results} />}

        <Pagination
          pageCount={state.pageCount}
          currentPage={state.currentPage}
          prevUri={state.prevUri}
          nextUri={state.nextUri}
          lastUri={state.lastUri}
        />
      </div>
    ),
    [houses, columns, state, isLoading]
  )
}
