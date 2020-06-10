import {childrenSubscribers} from '../../../utils/childrenSubscribers'
import React, {useMemo, useRef, useState} from 'react'
import './Table.css'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

const Table = props => {
  const [activeCell, activateCell] = useState( {rowIdx: 1, colIdx: 1} )

  // const childrenSubscribersTable = useMemo( childrenSubscribers
  //   , [1] )

  const childrenSubscribersTable = useRef( childrenSubscribers() )
  console.log( 'childrenSubscribersTable', childrenSubscribersTable.current )
  // if (childrenSubscribersTable.current === null) {
  //
  // }


  function handlerClick( event ) {
    const $el = event.target
    console.log( 'Table', $el.dataset )

    childrenSubscribersTable.current.list()

    if ( $el.dataset.type && $el.dataset.type === 'cell' ) {
      if ( $el.dataset.cell_id !== '2:1' ) {
        childrenSubscribersTable.current.run( 'deactivate' )
      }
    }

    // if ( $el.dataset.type && $el.dataset.type === 'cell' ) {
    //   console.log( 'Table', $el.dataset )
    //
    //   activateCell( {
    //     rowIdx: activeCell.rowIdx + 1,
    //     colIdx: activeCell.colIdx + 1,
    //   } )
    // }
  }

  const header = useMemo( () => (
    <TableHeader viewSettings={props.tableData.viewSettings}/>
  ), [props.tableData.viewSettings] )

  return (
    <table
      className={'Table'}
      onClick={handlerClick}
    >
      {console.log( 'Table render' )}
      {header}
      <TableBody
        tableData={props.tableData}
        childrenSubscribers={childrenSubscribersTable.current}
        activeCellId={'2:1'}
      />
    </table>
  )
}

export default Table