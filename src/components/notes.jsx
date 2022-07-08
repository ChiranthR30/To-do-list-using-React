import React from "react";
import "./comps.css"

function Notes(props){

    function handleClick(){
        props.onDelete(props.id)
    }

    return(
    <div className="mainnote">
        <div className="note">
            <p style={{fontWeight:"bold",fontSize:"1.2rem"}}>{props.title}</p>
            <p style={{fontSize:"1rem"}}>{props.content}</p>
            <button className="delbtn" onClick={handleClick}>Delete</button>
        </div>
    </div>
    )
}

export default Notes;