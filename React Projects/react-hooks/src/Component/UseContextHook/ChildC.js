import React, { useContext } from 'react'
import ChildD from './ChildD'
import { dataTopass } from './UseContextHook'

export default function ChildC() {
    const val = useContext(dataTopass);
  return (<>
    <div>ChildC  {val.fname}</div>
    < ChildD />
    </>)
}
