import React from 'react';
import './List.css';

function List(props) {
  return (
    <ul>
    {props.list.map((el, indx)=>{
        return(<div className='licontainer' key={indx}>
               <li>{el}</li>
               <button onClick={()=>props.onEditHandle(indx)}  className='listbtn'>🖍</button>
               <button onClick={()=>props.onDeleteHandle(indx)}  className='listbtn'>❌</button> 
        </div>)
    })}
        
    </ul>
  )
}

export default List

// const List =(props)=> {
//     return(<div className='list-box'>
//             <ul>
//                 {props.list.map((obj, index)=>{
//                       return(<div key={index}>
//                         <li>{obj}</li>
//                         <button onClick={()=>props.onEditHandler(index)}>Edit</button>
//                         <button onClick={()=>props.onDeleteHandler(index)}>Delete</button>
//                       </div>)  
//                 })}
//             </ul>
//     </div>)
// }