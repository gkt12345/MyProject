import React from 'react'
import './Input.css'

function Input(props) {

  return (<div className='inputContainer'>
    <div className='heading'>TODO LIST</div>
    <input type='text' value={props.value} onChange={props.onChangeHandler} />
    {(props.edit) ? <button onClick={props.onEditSubmit}  className='mainBtn' >🖍</button> : <button onClick={props.onAddHandler}  className='mainBtn' >+</button>}
    </div>)
}

export default Input


// const FormInput =(props)=> {
//     return(<div className='conatiner'>
//            <input type='text' value={props.value} onChange={props.onChangeHandler}  />
//            {(props.editStatus)?<button onClick={props.onEditSubmit} className='addbtn'>Edit TEXT</button>:<button onClick={props.onAddHandler} className='addbtn'>ADD TEXT</button>} 
//     </div>)
// }