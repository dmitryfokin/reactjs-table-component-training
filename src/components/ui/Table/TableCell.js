import React, {useState} from 'react'
import './TableCell.css'

const TableCell = props => {
  const classes = ['TableCell']

  const [activeCell, activateCell] = useState( false )

  function handlerClick( event ) {
    const $el = event.target

    if ( $el.dataset.type && $el.dataset.type === 'cell' ) {
      console.log( 'Cell', $el.dataset )

      activateCell( {
        rowIdx: activeCell.rowIdx + 1,
        colIdx: activeCell.colIdx + 1,
      } )
    }
  }


  console.log( 'TableCell render not-return', `${props.row.rowId}:${props.column.id}` )

  if ( props.activeCellId === `${props.row.rowId}:${props.column.id}` ) {
    classes.push( 'active' )
    props.childrenSubscribers.subscribe(
      'deactivate',
      () => {
        activateCell( !activeCell )
      },
      `${props.row.rowId}:${props.column.id}` )
  }

  return (
    <td
      className={classes.join( ' ' )}
      data-type='cell'
      data-cell_id={`${props.row.rowId}:${props.column.id}`}
      data-row_idx={`${props.row.rowId}`}
      data-column_idx={`${props.column.id}`}
      onClick={handlerClick}
    >
      {console.log( 'TableCell render' )}
      {props.cell}
    </td>
  )
}

export default TableCell