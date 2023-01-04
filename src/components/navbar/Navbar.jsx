import './navbar.scss'
import {FaSearch} from 'react-icons/fa'
import {MdLanguage, MdLightMode,MdDarkMode,MdFullscreenExit,
  MdNotificationsNone,MdChatBubbleOutline,MdOutlineStarOutline} from 'react-icons/md'
import avatar from '../../image/IMG_20220817_091017.png'


import { DarkModeContext } from '../../context/DarkModeContext'
import { useContext } from 'react'

  const Navbar = () => {
    const {dispatch, darkMode} = useContext(DarkModeContext)

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
              <input type="text" placeholder='search....' />
              <FaSearch />
        </div>
        <div className="itmes">
          <div className="itme">
             <MdLanguage className='icon first'/>
             English
          </div>
          <div className="itme">
             
            {
              darkMode ? <MdLightMode className='icon' onClick={()=> dispatch({type:"TOGGLE"})}/> :
               <MdDarkMode className='icon' onClick={()=> dispatch({type:"TOGGLE"})}/>
            }
          </div>
          <div className="itme">
             <MdFullscreenExit className='icon'/>
             
          </div>
          <div className="itme">
             <MdNotificationsNone className='icon'/>
             <div className="counter">2</div>
          </div>
          <div className="itme">
             <MdChatBubbleOutline className='icon'/>
             <div className="counter">1</div>
          </div>
          <div className="itme">
             <MdOutlineStarOutline className='icon'/>
          </div>
          <div className="itme">
           <img src={avatar} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar