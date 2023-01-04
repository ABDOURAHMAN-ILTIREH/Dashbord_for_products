import './sidebar.scss'
import {FaCalendar} from 'react-icons/fa'
import {MdDashboard, MdPerson,MdShoppingBag,MdDeliveryDining} from 'react-icons/md'
import {Link} from 'react-router-dom'

import {DarkModeContext} from "../../context/DarkModeContext"
import {useContext}  from 'react'

const Sidebar = () => {

  const {dispatch} = useContext(DarkModeContext)
  return (
    <div className='Sidebar'>
      <div className="top">
        <div className="logo">
          <Link to="/" style={{textDecoration : "none",color :"#6439ff"}}>  
          <span>Dashboard</span>
          </Link>
        </div>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <MdDashboard id='icon' />
            <span>dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
          <MdPerson id='icon'/>
          <Link to="/users" style={{textDecoration : "none"}}>  
            <span>users</span>
          </Link>
          </li>
          <li>
          <MdShoppingBag id='icon'/>
          <Link to="/products" style={{textDecoration : "none"}}>  
            <span>products</span>
          </Link>
          </li>
          <li>
          <FaCalendar id='icon'/>
          <Link to="/orders" style={{textDecoration : "none"}}>  
           <span>orders</span>
          </Link>
           </li>
          <li>
             <MdDeliveryDining id='icon'/>
            <Link to="/delivery" style={{textDecoration : "none"}}>  
           <span>delivery</span>
          </Link>
           </li>
          <p className="title">USEFUL</p>
          <li>
           <span>stats</span>
           </li>
          <li>
           <span>notification</span>
           </li>
          <p className="title">SERVICE</p>
          <li>
           <span>sytme health</span>
           </li>
          <li>
           <span>logs</span>
           </li>
          <li>
           <span>settings</span>
           </li>
          <p className="title">USER</p>
          <li>
           <span>profiles</span>
           </li>
          <li>
           <span>logout</span>
           </li>
          
        </ul>
      </div>
      <div className="bottom">
         <div className="colorOption"
          onClick={()=>dispatch({type: "LIGHT"})}
         ></div>
         <div className="colorOption"
         onClick={()=>dispatch({type: "DARK"})}
         ></div>
      </div>
    </div>
  )
}


export default Sidebar