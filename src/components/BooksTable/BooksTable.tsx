import React, { useState } from 'react'
import { useTable, useSortBy } from 'react-table'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'

import { IBook } from '../../models'
import { getBookCoverImageUrl, BookCoverSize } from '../../utilities'

const namespace = 'books-table'

interface BooksTableProps {
  columns: any[]
  books: IBook[]
}

const Row: React.FunctionComponent = ({ children }) => <div className={`${namespace}__row`}>{children}</div>

export const BooksTable = ({ columns, books }: BooksTableProps) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data: books,
    },
    useSortBy
  )

  return (
    <div className={namespace}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {column?.isSorted && (
                    <span className="data-table__sort-icon">
                      {column?.isSortedDesc ? <TiArrowSortedDown /> : <TiArrowSortedUp />}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {/* {books.map((book: IBook, index: number) => (
            <Row key={book.isbn}>
              <img
                className={`${namespace}__image`}
                src={getBookCoverImageUrl(book.isbn, BookCoverSize.Medium)}
                alt={book.name}
              />
              <span>{book.name}</span>
            </Row>
          ))} */}

          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
