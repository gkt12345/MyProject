import React, { createContext, useState } from 'react'
import ChildA from './ChildA'

const dataTopass = createContext();


export default function UseContextHook() {
 
 const [data, setdata] = useState({
    fname : 'ram',
    age : 20,
    class : "B.Com"
 })   

  return (<>
  <dataTopass.Provider value={data}>
    <h1>UseContextHook</h1>
    <ChildA data={data} />
    </dataTopass.Provider>
    </>)
}

export {dataTopass};
