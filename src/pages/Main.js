import React from 'react'
import './Main.css'
import tableData from '../tableData'
import Table from '../components/ui/Table/Table'

const Main = props => {
  return (
    <div className={'Main'}>
      <h1>Главна страница</h1>
      <div className="table_wrapper">
        <Table tableData={tableData}/>
      </div>
    </div>
  )
}

export default Main