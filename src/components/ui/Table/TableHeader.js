import React from 'react'
import './TableHeader.css'
import TableHeaderColumn from './TableHeaderColumn'

const TableHeader = props => {
  return (
    <thead className={'TableHeader'}>
    {console.log( 'TableHeader render' )}
    <tr>
      {props.viewSettings.columns.map( column => (
        <TableHeaderColumn
          column={column}
          key={column.id}
        />
      ) )}
    </tr>
    </thead>
  )
}

export default TableHeader