import React from 'react'
import './TableHeaderColumn.css'

const TableHeaderColumn = props => {
  return (
    <th className={'TableHeaderColumn'}>
      {console.log('TableHeaderColumn render')}
      {props.column.description}
    </th>
  )
}

export default TableHeaderColumn