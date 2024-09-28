import 'bootstrap/dist/css/bootstrap.min.css'
import TodoInput from './components/TodoInput'
import style from '../src/css/App.module.css'
import { useState } from 'react'
import ListItems from './components/ListItems';

function App() {
  const[todoList, setTodoList] = useState([]);
  
  const addItemToList = (todoItem)=>{
    if(todoItem!=='')
    setTodoList([...todoList, todoItem]);
  }

  const deleteTodo = (key)=>{
    let newTodoList = [...todoList];
    newTodoList.splice(key,1);
    setTodoList([...newTodoList])
  }


  return (
    <>
      <TodoInput listItem={addItemToList}/>
      <h1 className={style.todoHeading}>Todo Items</h1>
      <hr/>
      {
        todoList.map((item, i)=>{
          return <ListItems key={i} index={i} itemName={item} deleteTodo={deleteTodo}/>
        })
      }
    </>
  )
}

export default App
