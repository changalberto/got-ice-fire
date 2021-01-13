import React, { useCallback } from 'react'
import cn from 'classnames'

import { isStringEmptyOrNull, historyPushQueryParams, getPageNumberFromUriParam } from '../../utilities'

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
  const handleGotoPageByNumber = useCallback((e: React.MouseEvent<HTMLButtonElement>, number: number) => {
    e.preventDefault()
    historyPushQueryParams('page', `${number}`)
  }, [])

  const handleChangePageSize = useCallback((e: React.FormEvent<HTMLSelectElement>) => {
    e.preventDefault()
    historyPushQueryParams({ page: '1', pageSize: `${e.currentTarget.value}` })
  }, [])

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
