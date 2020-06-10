import React from 'react'
import './TableRow.css'
import TableCell from './TableCell'

const TableRow = props => {
  return (
    <tr className={'TableRow'}>
      {/*{console.log( 'TableRow render' )}*/}
      {props.viewSettings.columns.map( column => (
        <TableCell
          cell={props.row[column.name]}
          row={props.row}
          column={column}
          key={column.id}
          activeCellId={props.activeCellId}
          childrenSubscribers={props.childrenSubscribers}
        />
      ) )}
    </tr>
  )
}

export default TableRow