import React from 'react'

export default function Child(props) {
  return (
    <div>
        {props.list.map((val, ind)=>{
            return (<li key={ind} id={ind}>
                  {val}
                  <button onClick={()=>props.onDeleteHandler(ind)}>delete</button>
                  <button onClick={()=>props.onEditHandler(ind)}>Edit</button>  
            </li>)
        })}
    </div>
  )
}
