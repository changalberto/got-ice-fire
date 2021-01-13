import React from 'react'
import { useTable, useSortBy } from 'react-table'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'

import './data-table.scss'

const namespace = 'data-table'

interface DataTableProps {
  columns: any[]
  data: any[]
  initialState?: any
}

export const DataTable = ({ columns, data, initialState }: DataTableProps) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
      initialState,
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
