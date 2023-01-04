import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/dataTable/Datatable"
import './list.scss'
const List = () => {
  return (
    <div className='list'>
       <Sidebar />
       <div className="list_Container">
          <Navbar />
          <Datatable />
       </div>
    </div>
  )
}

export default List