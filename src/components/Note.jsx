import React from "react";

function Note({ id, heading, text, onDelete }) {
    return (
        <div className="box">
            <h1>{heading}</h1>
            <p>{text}</p>
            <button onClick={() => onDelete(id)}>-</button>
        </div>
    );
}


export default Note;