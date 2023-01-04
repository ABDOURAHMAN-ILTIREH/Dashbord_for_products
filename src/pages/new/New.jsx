import './new.scss'
import image from "../../image/IMG_20220817_091017.png"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import {MdOutlineDriveFolderUpload} from 'react-icons/md'
import NewInput from './NewInput'
import { useState } from 'react'





const New = ({inputs,title}) => {
  const [file, setFile] = useState("")

  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
             <img src={file ? URL.createObjectURL(file) : image} alt="" />
          </div>
          <div className="right">
               <form>
                <div className="formInput">
                   <label htmlFor="file" >
                    Image : <MdOutlineDriveFolderUpload className='icon'/>
                   </label>
                  <input type="file" id='file' style={{display:"none"}}
                   onChange={(e)=> setFile(e.target.files[0])}
                  />
                </div>
              
                 {
                    inputs.map(input =>(
                       <NewInput key={input.id} input={input} />
                    ))
                }
                  <button>Send</button>
               </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New