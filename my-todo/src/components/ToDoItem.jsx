import React, { useCallback, useState } from "react"
import "../css/ToDoItem.css"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';



function ToDoItem({ item, handleDelete, handleEdit, toggleComplete }) {
    const [lineThrough, setLineThrough] = useState(item.complete);

    function handleComplete(e) {
        setLineThrough(!lineThrough);
        toggleComplete(e);
    }

    function handlingDelete(e) {
            handleDelete(e);
    }
    
    return (
        <div className="item" key={item.id} id={item.id}>
            <div className="text" style={{ textDecoration: lineThrough ? 'line-through' : 'none' }}>{item.text}</div>
            <div id={item.id}>
                <button onClick={handleComplete} className="complete-btn"><FontAwesomeIcon icon={faCheck} /></button>
                <button onClick={handleEdit} className="edit-btn"><FontAwesomeIcon icon={faEdit} /></button>
                <button  className="delete-btn"><FontAwesomeIcon onClick={handlingDelete}  icon={faTrash} /></button>
            </div>
        </div>
    )
}


export default ToDoItem;