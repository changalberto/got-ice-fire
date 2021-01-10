import React, { useEffect, useMemo, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { AsyncThunkAction } from '@reduxjs/toolkit'

import { RootState } from '../../store'
import { setBreakpoint } from '../../store/actions/layouts.actions'
import { fetchGotBooks } from '../../store/actions/services.actions'

import BooksTable from '../../components/BooksTable'

import './HomeContainer.scss'

export const HomeContainer = () => {
  const layouts = useSelector((state: RootState) => state.layouts)
  const { books } = useSelector((state: RootState) => state.services)
  const dispatch = useDispatch()

  const handleChangeBreakpoint = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      dispatch(setBreakpoint('desktop'))
    },
    [dispatch]
  )

  useEffect(() => {
    const promise = dispatch(fetchGotBooks())
    console.log('promise', promise)
    // return () => promise.abort()
  }, [dispatch])

  return useMemo(
    () => (
      <div className="Home">
        <BooksTable books={books} />
        <p>Current Breakpoint: {layouts.breakpoint}</p>
        <button onClick={handleChangeBreakpoint}>Set Breakpoint</button>
      </div>
    ),
    [books, handleChangeBreakpoint, layouts]
  )
}
