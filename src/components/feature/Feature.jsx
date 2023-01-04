import "./feature.scss"
import {MdMoreVert, MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md'
import { CircularProgressbar  } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"
const Feature = () => {

  
  return (
    <div className="feature">
      <div className="top">
            <h1 className="title">total revenue</h1>
           <MdMoreVert />
      </div>
      <div className="bottom">
          <div className="featuredchart">
            <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
          </div>
          <p className="title">Total sales made today</p>
          <p className="amout">$420</p>
          <p className="dec">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quo.</p>
        <div className="summary">
           <div className="item">
            <div className="itemTile">Today</div>
              <div className="itemResult negative">
                   <MdKeyboardArrowDown />
                   <div className="resultAmout">$12.4k</div>
              </div>
           </div>
           <div className="item">
            <div className="itemTile">Last Weeks</div>
              <div className="itemResult positive">
                   <MdKeyboardArrowUp />
                   <div className="resultAmout">$12.4k</div>
              </div>
           </div>
           <div className="item">
            <div className="itemTile">Last Month</div>
              <div className="itemResult positive">
                   <MdKeyboardArrowUp />
                   <div className="resultAmout">$12.4k</div>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Feature