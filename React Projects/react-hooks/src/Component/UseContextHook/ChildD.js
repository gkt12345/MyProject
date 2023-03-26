import React, { useContext } from 'react'
import {dataTopass} from './UseContextHook';

export default function ChildD() {
  const val = useContext(dataTopass);
    return (
    <div>ChildD {val.age}</div>
  )
}
