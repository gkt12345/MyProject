import React, { useMemo, useState } from 'react'

export default function UseMemo() {
    
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(false);

    const onClickHander =()=>{
       return setCount(count+1);   
   }
   
    const counter =(num)=>{
        for(let i=0; i<1000000000; i++){}
        
        console.log("rendering... my value is " + num);
        return num;
    }

    const counterVal = useMemo(()=>{
        return counter(count);   
    },[count])

   

    return (<>
    
    <button onClick={onClickHander}>Count++</button>
    <br></br>
    <h1>My new number : {counterVal}</h1>
    <br></br>
    <button onClick={()=> setShow(!show)}>
        {show ? "You clicked me" : "click me plz..."}
    </button>
    </>)
}
