import React from 'react'

function Square(props) {
  return (
    <div 
    onClick={props.onClick}
    style={{
        border : "1px solid ",
         height:"100px",
          width:"50vw",
          display:"flex",
          alignItems:"center",
          justifyContent:"center"
          }} className='square'>
        <h5>{props.value}</h5>
    </div>
  )
}

export default Square