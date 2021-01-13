import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import cn from 'classnames'

import { isStringEmptyOrNull, getPageNumberFromUriParam } from '../../utilities'
import { useQuery } from '../../hooks/useQuery'

import './pagination.scss'

type PaginationProps = {
  currentPage: number
  pageCount: number
  pageSize: number
  prevUri?: string
  nextUri?: string
  lastUri?: string
}
export const Pagination = ({ pageCount, currentPage, pageSize, prevUri, nextUri, lastUri }: PaginationProps) => {
  const history = useHistory()
  const query = useQuery()

  const handleGotoPageByNumber = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, number: number) => {
      e.preventDefault()
      query.set('page', `${number}`)
      history.push({ search: query.toString() })
    },
    [query, history]
  )

  const handleChangePageSize = useCallback(
    (e: React.FormEvent<HTMLSelectElement>) => {
      e.preventDefault()
      query.set('pageSize', `${e.currentTarget.value}`)
      history.push({ search: query.toString() })
    },
    [query, history]
  )

  return (
    <div className="pagination">
      <button
        className="pagination__button-prev"
        onClick={e => handleGotoPageByNumber(e, getPageNumberFromUriParam(prevUri))}
        disabled={isStringEmptyOrNull(prevUri)}
      >
        Prev
      </button>

      {pageCount > 0 &&
        Array.from(Array(pageCount).keys()).map(index => (
          <button
            key={`page-${index}`}
            className={cn('pagination__button-page', { 'pagination__button-page--active': currentPage === index + 1 })}
            onClick={e => handleGotoPageByNumber(e, index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}

      {!isStringEmptyOrNull(lastUri) && (
        <button
          className="pagination__button-last"
          onClick={e => handleGotoPageByNumber(e, getPageNumberFromUriParam(lastUri))}
          disabled={currentPage === getPageNumberFromUriParam(lastUri)}
        >
          Last
        </button>
      )}

      <button
        className="pagination__button-next"
        onClick={e => handleGotoPageByNumber(e, getPageNumberFromUriParam(nextUri))}
        disabled={isStringEmptyOrNull(nextUri)}
      >
        Next
      </button>
      <select onChange={e => e.currentTarget.blur()} onBlur={e => handleChangePageSize(e)} value={`${pageSize}`}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
  )
}
