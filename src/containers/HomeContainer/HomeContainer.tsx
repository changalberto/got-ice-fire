import React, { useMemo, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from '../../store'
import { setBreakpoint } from '../../store/actions/layoutsActions'
import { useFetchBooks } from '../../services/books.service'

import BooksTable from '../../components/BooksTable'

import './HomeContainer.scss'

export const HomeContainer = () => {
  const layouts = useSelector((state: RootState) => state.layouts)
  const dispatch = useDispatch()
  const books = useFetchBooks()

  const handleChangeBreakpoint = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      dispatch(setBreakpoint('desktop'))
    },
    [dispatch]
  )

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
