import React, { useState } from 'react'
import Child from './child'
import './todo.css';

export default function Todo() {
  
    const [data,setData] = useState();
    const [list, setList] = useState([]);
    const [show, setShow] = useState(false);
    const [id, setID] = useState();

    const onchangeHandler =(e) => {
        setData(e.target.value);
    }

    const onAddHAndler =()=>{
          setList([...list, data])  
          setData('');  
        }

    const onDeleteHandler =(ind)=>{
        list.splice(ind, 1);
        setList([...list]); 
           
    }

    const onEditHandler =(ind)=>{
           let data = list[ind];
           setData(data);
           setShow(!show);
           setID(ind) 
    }

    const onEditHAndler =()=>{
        let newEnt = list[id]; 
        
        setList([...data, ])   
    }


  return (<div className='todocontainer'>
    <div className='inputField'>
        <input type='text' value={data} onChange={onchangeHandler}  />
        <br></br>
        {show ? <button onClick={onEditHAndler}>Edit Todo</button> : <button onClick={onAddHAndler}>Add Todo</button>}
    </div>    
    <Child onEditHandler={onEditHandler} onDeleteHandler={onDeleteHandler} list={list} />
    </div>)
}
