import { useState } from 'react';
import '../Style/All.css';


const Input = (props) => {
    
    const [hide, sethide] = useState(false);

    const [getNote, setNote] = useState({
        title:"",
        content:""
    });

    const onChangeHandler=(event)=>{
            // const [value, name] = event.target;
            // setNote((preval)=>{
            //     return {...preval, [value]:name};   
            // })

            setNote({...getNote, [event.target.name]:event.target.value});
            // console.log(getNote);

        }

        const expentBox =()=>{
            sethide(true);
        }
    
        const onDubbleClickHandler =()=>{
            sethide(false);
        }

    return (<>
        <div className='container' onDoubleClick={onDubbleClickHandler}>
            { hide ? <div className='titleDiv'>
                <input type="text" onChange={onChangeHandler} value={getNote.title} name="title" className='titleInput' placeholder='Title:' />
            </div> : null }
            <div className='textarieaDiv'>
                <textarea onChange={onChangeHandler} onClick={expentBox} value={getNote.content} name="content" className='textArea' placeholder='Write a note...' />
            </div>
           { hide ? <div className='mainbtn'>
                <button onClick={()=>props.onAddNote(getNote,setNote)} className='mainbtnsign' >➕</button>
            </div> : null }
        </div>
    </>)
}

export default Input;