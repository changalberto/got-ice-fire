import React from 'react'
import { useTable, useSortBy, useFilters } from 'react-table'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'

import { isStringEmptyOrNull } from '../../utilities'

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
    useFilters,
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
                  <span className="header-label">{column.render('Header')}</span>
                  {column?.isSorted && (
                    <span className="data-table__sort-icon">
                      {column?.isSortedDesc ? <TiArrowSortedDown /> : <TiArrowSortedUp />}
                    </span>
                  )}
                  {column?.canFilter && column.filter && column.render('Filter')}
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

export const SelectColumnFilter = ({ column: { filterValue, setFilter, preFilteredRows, id } }: any) => {
  const options = React.useMemo(() => {
    const options: any = new Set()
    preFilteredRows.forEach((row: any) => {
      !isStringEmptyOrNull(row.values[id]) && options.add(row.values[id])
    })
    return [...options]
  }, [id, preFilteredRows])

  return (
    <select
      value={filterValue}
      onChange={e => e.currentTarget.blur()}
      onBlur={e => {
        setFilter(e.target.value || undefined)
      }}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}
