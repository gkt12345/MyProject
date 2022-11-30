import { useState } from 'react';
import './App.css';
import FormInput from './FormInput/FormInput';
import List from './List/List';



const App =()=> {
   
   const [getText,setText] = useState("");
   const [getList,setList] = useState([]);
   const [getEdit,setEdit] = useState(false);
   const [getIndex,setIndex] = useState(-1);
 
   const onChangeHandler =(event)=>{
     //    console.log(event.target.value);
          setText(event.target.value);
   }
   
   const onAddHandler =()=> {
        setList([...getList, getText])  
   }

   const onDeleteHandler =(index)=> {
          // alert(index);  
          let list = getList;
          list.splice(index, 1);
          setList([...list]);
   }

   const onEditHandler =(index)=> {
          setText(getList[index]);
          setEdit(true);
          setIndex(index);          
   }

   const onEditSubmit =()=> {
          let list=getList;
          list[getIndex] = getText;
          setList([...list]);
          setText('');
          setEdit(false);
   }

   return(<div>
           <FormInput onEditSubmit={onEditSubmit} value={getText} editStatus={getEdit} onAddHandler={onAddHandler} onChangeHandler={onChangeHandler} />
           <List onEditHandler={onEditHandler} onDeleteHandler={onDeleteHandler} list={getList} />    
     </div>)
}

export default App;














// import { useState } from 'react';
// import './App.css';
// import FormInput from './FormInput/FormInput';
// import List from './List/List';


// const App =()=> {
//      const [getText,setText] = useState("");
//      const [getList,setList] = useState([]);
//      const [getEdit,setEdit] = useState(false);
//      const [getIndex,setIndex] = useState(-1);

//      const onChangeHandler =(event)=>{
//           // console.log(event.target.value);
//             setText(event.target.value);   
//      }

//      const onAddHandler =()=> {
//           setList([...getList, getText])
//           // console.log(getList);          
//      }

//      const onDeleteHandler =(index)=> {
//           // alert();
//           let list = getList;
//           list.splice(index, 1)
//           setList([...list]);
//      }


//      const onEditHandler =(index)=> {
//           setEdit(true);
//           setText(getList[index]);
//           setIndex(index);     
//      }
//      const onEditSubmit =()=>{
//           let list = getList;
//           list[getIndex] = getText;
//           setList([...list]);
//           setText('');
//           setEdit(false);
//      }
     

//      return(<div>
//           <FormInput onEditSubmit={onEditSubmit} value={getText} typeStatus={getEdit} onAddHandler={onAddHandler} onChangeHandler={onChangeHandler} />
//           <List onEditHandler={onEditHandler} onDeleteHandler={onDeleteHandler} list={getList} />     
//      </div>)
// }


// export default App;

