import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Input from "./Component/Input";
import List from "./Component/List";
import { useState } from "react";


function App() {
const [getList, setList] = useState([]);

const onAddNote =(getNote, setNote)=>{
      if(getNote.title != "" || getNote.content != ""){
        setList([...getList, getNote]);
        setNote({title:"",content:""});
      }else{
        alert("Bhai Kuchh Likh To Pahle Fir Add Kar");
      }
      
  }

const dltBtn =(index) =>{
    // alert();
    getList.splice(index, 1);
    setList([...getList]);
}

  return (<>   
        <Header />
        <Input onAddNote={onAddNote} />
        <List dltBtn={dltBtn} getList={getList} />
        <Footer />
  
 </> );
}

export default App;
