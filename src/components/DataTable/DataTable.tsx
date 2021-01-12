import React from 'react'
import { useTable, useSortBy } from 'react-table'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'

const namespace = 'books-table'

interface DataTableProps {
  columns: any[]
  data: any[]
}

export const DataTable = ({ columns, data }: DataTableProps) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
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