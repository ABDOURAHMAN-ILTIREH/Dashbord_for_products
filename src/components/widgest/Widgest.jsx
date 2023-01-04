import "./widgest.scss"
import {MdKeyboardArrowUp, MdOutlinePerson,
     MdOutlineAddShoppingCart, MdOutlineMonetizationOn ,MdOutlineAccountBalance} from 'react-icons/md'
const Widgest = ({ type}) => {

    let data;
   
    switch(type){
        case "user": 
          data = {
            title: "USERS",
            isMoney  : false,
            link : "see all users",
            icon : (
                <MdOutlinePerson className="icon"
                style={{color:"crimson", backgroundColor:"rgba(255,0,0,0.2)"}}
                 />
            )
          };
          break;
        case "order": 
          data = {
            title: "ORDERS",
            isMoney  : false,
            link : "see all orders",
            icon : (
                < MdOutlineAddShoppingCart className="icon"
                style={{color:"goldrenrod", backgroundColor:"rgba(218,165,32,0.2)"}}
                />
            )
          };
          break;
        case "earning": 
          data = {
            title: "EARNINGS",
            isMoney  : true,
            link : "view net earning",
            icon : (
                <MdOutlineMonetizationOn className="icon" 
                style={{color:"green", backgroundColor:"rgba(0,128,0,0.2)"}}/>
            )
          };
          break;
        case "balance": 
          data = {
            title: "BALANCE",
            isMoney  : true,
            link : "see details ",
            icon : (
                <MdOutlineAccountBalance className="icon"
                style={{color:"purple", backgroundColor:"rgba(128,0,128 ,0.2)"}}
                 />
            )
          };
          break;

        default:
            break;
    }
    // temporarily
    const amount = 100;
    const diff = 20;

  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"} {amount} </span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <MdKeyboardArrowUp />
                {diff}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widgest