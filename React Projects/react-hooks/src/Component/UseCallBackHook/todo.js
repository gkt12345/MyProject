// import React from 'react'
import { memo } from 'react';

const Todo = ({data,addData}) => {
    
    console.log("child render");
  
  return (<>
    <div>My Todos</div>
    {data.map((val, ind)=>{
        return (<p key={ind}>{val+ind}</p>)
    })}
    <button onClick={addData}>Add Todo</button>
    </>)
}

export default memo(Todo);
