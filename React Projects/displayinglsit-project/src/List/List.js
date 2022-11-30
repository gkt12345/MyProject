import './List.css';

const List =(props)=> {
    return(<div className='list-box'>
            <ul>
                {props.list.map((obj, index)=>{
                      return(<div key={index}>
                        <li>{obj}</li>
                        <button onClick={()=>props.onEditHandler(index)}>Edit</button>
                        <button onClick={()=>props.onDeleteHandler(index)}>Delete</button>
                      </div>)  
                })}
            </ul>
    </div>)
}

export default List;











// import './List.css';

// const List =(props)=> {
//     return(<div className='list-box'>

//         <ul>
//             {props.list.map((obj,index)=>{
//                 return(<div  key={index}>
//                     <li>{obj}</li>
//                     <button onClick={()=>props.onEditHandler(index)}>Edit</button>
//                     <button onClick={()=>props.onDeleteHandler(index)}>Delete</button>
//                 </div>)
//             })}
//         </ul>

//     </div>)
// }

// export default List;
