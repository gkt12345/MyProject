import './Todo.css';
import Input from './Input';
import List from './List';
import { useState } from 'react';



const Todo =()=>{
    const [text, setText] = useState("");
    const [list, setList] = useState([]);
    const [edit,setEdit] = useState(false);
    const [index, setIndex] = useState(null);

    const onAddHandler =()=>{
        setList([...list, text]);
        setText('');
    }

    const onDeleteHandle =(indx)=>{
            // alert(indx);
           list.splice(indx, 1);
           setList([...list]); 
    }

    const onEditHandle =(indx)=>{
        // alert(indx);
        let editableText = list[indx];
        setText(editableText);
        setEdit(true);
        setIndex(indx);
    }

    const onEditSubmit =()=>{
        list[index] = text;
        setList([...list]);
        setText('');
        setEdit(false);
    }

    const onChangeHandler =(e)=>{
        setText(e.target.value);
    }    


    return(<div className='todoConatiner'>
            <Input onEditSubmit={onEditSubmit} edit={edit} value={text}  onAddHandler={onAddHandler} onChangeHandler={onChangeHandler} />
            <List onEditHandle={onEditHandle} onDeleteHandle={onDeleteHandle} list={list} />
    </div>)
}

export default Todo