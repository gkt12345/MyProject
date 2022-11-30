import './FormInput.css';

const FormInput =(props)=> {
    return(<div className='conatiner'>
           <input type='text' value={props.value} onChange={props.onChangeHandler}  />
           {(props.editStatus)?<button onClick={props.onEditSubmit} className='addbtn'>Edit TEXT</button>:<button onClick={props.onAddHandler} className='addbtn'>ADD TEXT</button>} 
    </div>)
}

export default FormInput;


// import './FormInput.css';


// const FormInput =(props)=> {

//     return(<div className='conatiner'>
//              <input value={props.value} type='text' onChange={props.onChangeHandler} />
//              {(props.typeStatus)?<button onClick={props.onEditSubmit} className='addbtn'>Edit</button>:<button onClick={props.onAddHandler} className='addbtn'>ADD</button>}   
//     </div>)
// }

// export default FormInput;
