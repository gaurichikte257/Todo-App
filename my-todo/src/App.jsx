import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ToDoList from './components/ToDoList'

let listInit = [
  {id: 1, text: "Gauri's todo", complete: false},
  {id: 2, text: "Speak marathi", complete: false},
  {id: 3, text: "Eat fruits", complete: false}
]


function App() {
  
  const [itemList, setItemList] = useState(listInit);
  const [editTodo, setEditTodo] = useState({});
  const [openEdit, setOpenEdit] = useState(false);
  // one item contains id, text and complete


  function handleAdd(e) {
    e.preventDefault();
    let input = document.querySelector(".new-item");
    if(input.value === "") {
      alert("todo can't be empty");
      return;
    }
    let newItem = {id: Date.now(), text: input.value, complete: false};
    setItemList([...itemList, newItem]);
    input.value = "";
  }

  function toggleComplete(e) {
    let currId = parseInt(e.target.parentElement.parentElement.parentElement.id);

    
    for(let i=0; i<itemList.length; i++) {
      if(itemList[i].id === currId) {
        itemList[i].complete = !itemList[i].complete;
        break; 
      }
    }
    setItemList(itemList);
  }

  function handleDelete(e) {
    
    let currId = parseInt(e.target.parentElement.parentElement.parentElement.id);
    let newList = itemList.filter(item => item.id !== currId);
    setItemList(newList);
  }

  function handleEdit(e) {
    console.log("editing item...");
    
    let currId = parseInt(e.target.parentElement.parentElement.parentElement.id);
    for(let i=0; i<itemList.length; i++) {
      if(itemList[i].id === currId) {
        setEditTodo(itemList[i]);
        setOpenEdit(!openEdit);
        break;
      }
    }

  }

  function handleSave(e) {
    e.preventDefault();
    let value = document.querySelector(".edit-input").value;
    editTodo.text = value;
    setEditTodo(editTodo);

    let list = itemList;
    
    for(let i=0; i<list.length; i++) {
      if(list[i].id === editTodo.id) {
        list[i].text = editTodo.text;
        break;
      }
    }

    setItemList(list);
    setOpenEdit(!openEdit);

  }

  function closeForm() {
    console.log("closing form")
    setOpenEdit(!openEdit);
  }





  return (
    <div className='app-container'>
      <Header />
      <ToDoList itemList={itemList} setItemList={setItemList} toggleComplete={toggleComplete} handleDelete={handleDelete} handleEdit={handleEdit} handleAdd={handleAdd} />

      {openEdit && 
        <>
          <div className='overlay' onClick={closeForm}></div>
          <form className='edit-form'>
            <input className='edit-input' type="text" defaultValue={editTodo.text} />
            <button onClick={handleSave} >Save</button>
          </form>
        </>
      }
        
    </div>
  )
}

export default App
