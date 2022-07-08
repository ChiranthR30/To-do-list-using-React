import React from "react";
import "./comps.css"



function Takeinput(props){
    
    //const [title,setTitle] = React.useState([]);
    const [note,setNote] = React.useState({
        title:"",
        content:""
    });

    function handleChange(event){
        const {name,value} = event.target;
        setNote((preVal)=>{
            return{
                ...preVal,
                [name]:value
            };
        })
    }

    function hSubmit(event){
        event.preventDefault();
        props.onAdd(note);

    }

    return(
        <form>
        <div className="inp">
            <input className="tinp"
                name="title"
                onChange={handleChange}
                defaultValue={note.title} 
                placeholder="Title" 
            />
            
            <input className="tinp"  
                name="content"
                placeholder="Take a note..."
                defaultValue={note.content} 
                onChange={handleChange}
             />
            <button className="addbtn" onClick={hSubmit}>Add</button>
        </div>
        </form>
    )
}

export default Takeinput;