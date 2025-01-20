import React from "react";
import ToDoItem from "./ToDoItem";
import "../css/ToDoList.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash, faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';



function ToDoList({itemList, setItemList, handleDelete, toggleComplete, handleEdit, handleAdd}) {

    


    return (
        <div>

            <form className="add-form">
                <input placeholder="Add Todo" type="text" className="new-item" />
                <button onClick={handleAdd} className="add-button"><FontAwesomeIcon icon={faPlus} /></button>
            </form>

            <div className="heading">Your Todos</div>
            <div className="items">
                {
                    itemList.map((item) => {
                        return   (                   
                            <ToDoItem key={item.id} handleDelete={handleDelete} handleEdit={handleEdit} toggleComplete={toggleComplete} item={item} />
                        )
                    })
                }
            </div>
        </div>
    )
}


export default ToDoList;