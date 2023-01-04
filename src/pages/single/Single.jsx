import React from 'react'
import image from '../../image/IMG_20220817_091017.png'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import List from '../../components/table/Table'

import './single.scss'
const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
         <Navbar /> 
        <div className="top">
           <div className="left">
                <h1 className='titles'>Information</h1>
                <div className="editeButton">Edite</div>
                <div className="item">
                  <img src={image} alt="" className="itemImage" />
                <div className="details">
                     <h1 className="title">john doe</h1>
                     <div className="detail">
                      <span className="itemKey">email</span>
                      <span className="itemValue">jonedoe@gmail.com</span>
                     </div>
                     <div className="detail">
                      <span className="itemKey">phone</span>
                      <span className="itemValue">+1 256 65 86</span>
                     </div>
                     <div className="detail">
                      <span className="itemKey">address</span>
                      <span className="itemValue">Elton st.248 Garden Yd. NewYork</span>
                     </div>
                     <div className="detail">
                      <span className="itemKey">Country</span>
                      <span className="itemValue">USA</span>
                     </div>
                </div>
                </div>
           </div>
           <div className="right">
              <Chart aspect={3 / 1} title="User Spanding Last (6 Month)"/>
           </div>
        </div>
        <div className="bottom">
        <h1 className='titles'>Last Transaction</h1>
            <List />
        </div>
      </div>
    </div>

  )
}

export default Single