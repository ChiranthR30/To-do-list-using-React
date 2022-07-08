import React from "react";
import Header from './Navbar';
import Takeinput from './takeinput';
import Notes from './notes';


function App(){

    const [notes,setNotes]=React.useState([]);

    function handleDelete(id){
        setNotes((preVal)=>{
            return preVal.filter((notes,index)=>{
                return index!==id
            })
        })
    }

    function caller(sample,index){
       return <Notes key={index} id={index} title={sample.title} content={sample.content} onDelete={handleDelete}/>
    }

    function addNote(note){
        setNotes(preVal=>{
            return [...preVal,note]
        })
    }

    return(
        <div>
            <Header/>
            <Takeinput onAdd={addNote}/>
            {notes.map(caller)}
        </div>
    )
}

export default App;