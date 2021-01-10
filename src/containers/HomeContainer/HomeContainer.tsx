import React, { useEffect, useMemo, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { RootState, AppDispatch } from '../../store'
import { setBreakpoint } from '../../store/actions/layouts.actions'
import { fetchGotBooks } from '../../store/actions/services.actions'

import BooksTable from '../../components/BooksTable'

import './HomeContainer.scss'

export const HomeContainer = () => {
  const layouts = useSelector((state: RootState) => state.layouts)
  const { books } = useSelector((state: RootState) => state.services)
  const dispatch: AppDispatch = useDispatch()

  const handleChangeBreakpoint = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      dispatch(setBreakpoint('desktop'))
    },
    [dispatch]
  )

  // On Initial Mount, Fetch Books
  useEffect(() => {
    const promise = dispatch(fetchGotBooks())
    return () => promise.abort()
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
