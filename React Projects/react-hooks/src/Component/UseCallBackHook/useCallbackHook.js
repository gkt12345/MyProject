import React, { useCallback, useState } from 'react'
import Todo from '../UseCallBackHook/todo'

export default function UseCallbackHook() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

 const addData = useCallback(()=>{
    setData([...data, 'newentry']);
  }, [data]);  

//   const addTodo = ()=> {
//         setData([...data, 'newentry']);
//   }  

  return (<>
    <Todo data={data} addData={addData} />
    <br></br>
    <div>{count}</div>
    <button onClick={()=>setCount(count+1)}>Click</button>
    </>)
}
