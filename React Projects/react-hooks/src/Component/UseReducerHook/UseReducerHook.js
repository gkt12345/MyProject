import React, { useReducer } from 'react'

const reducer =(state, action)=>{
    console.log(state, action);
    if(action.type === 'Increment'){
        return state+1;
    }
    if(action.type === 'Decrement' && state >= 1){
        return state-1;
    }
    return state;
}

const initialState = 0;

export default function UseReducerHook() {

    const [state, dispatch] = useReducer(reducer, initialState)

  return (<>
    <h1>UseReducerHook</h1>
    <h1>UseReducer Counter : {state}</h1>
    <button onClick={()=>{dispatch({type : "Increment"})}}>Counter++</button>
    <button onClick={()=>{dispatch({type : "Decrement"})}}>Counter--</button>
    </>)
}
