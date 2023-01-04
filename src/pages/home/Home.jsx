import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feature from '../../components/feature/Feature'
import Chart from '../../components/chart/Chart'

import './home.scss'
import Widgest from '../../components/widgest/Widgest'
import Table from '../../components/table/Table'
const Home = () => {
  return (
    <div className='Home'>
       <Sidebar />
       <div className="content_container">
        <Navbar />
           <div className="widgest">
             <Widgest type="user" />
             <Widgest type="order" />
             <Widgest type="earning" />
             <Widgest type="balance" />
           </div>
           <div className="charts">
               <Feature />
               <Chart aspect={2 / 1} title="Last 6 Month (Revenue)" />
           </div>
           <div className="List_container">
            <div className="List_title">
              lastest transactions
            </div>
            <Table />
           </div>
       </div>
    </div>
  )
}

export default Home