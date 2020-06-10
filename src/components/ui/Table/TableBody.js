import React from 'react'
import './TableBody.css'
import TableRow from './TableRow'

const TableBody = props => {
  const arrRows = []
  Object.keys( props.tableData.data.rows )
    .forEach( key => arrRows.push( props.tableData.data.rows[key] ) )

  return (
    <tbody className={'TableBody'}>
    {console.log( 'TableBody render' )}
    {arrRows.map( row => (
      <TableRow
        row={row}
        viewSettings={props.tableData.viewSettings}
        key={row.rowId}
        activeCellId={props.activeCellId}
        childrenSubscribers={props.childrenSubscribers}
      />
    ) )}
    </tbody>
  )
}

export default TableBody