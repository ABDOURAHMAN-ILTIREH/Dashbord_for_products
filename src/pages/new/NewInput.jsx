import React from 'react'

const NewInput = ({input}) => {
  return (
    <>
       <div className="formInput" key={input.id}>
            <label>{input.label}</label>
           <input type={input.type} placeholder={input.placeholder} />
       </div>
    </>
  )
}

export default NewInput