import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import TodoList from './TodoList';

const App = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState('')
  const changeHandler = (e)=>{
    setInput(e.target.value);
  }
  const clickHandler = (e)=>{
    e.preventDefault();
    setTodo([...todo, input])
    setInput('')
  }
  const deleteHandler = (indexVal)=>{
    const newtodo = todo.filter((item,index)=>index!==indexVal);
    setTodo(newtodo);
  }
  return (
    <div>
      <center>
        <h1>REACT TODO APP</h1>
        <TextField onChange={changeHandler} value={input} id="outlined-basic" label="Enter here" variant="outlined" /> <br/>
        <h1></h1>
        <Button onClick={clickHandler} variant='contained'>Add</Button>
        <h1></h1>
        <TodoList todo={todo} deleteHandler={deleteHandler}/>
        
      </center>
    </div>
  )
}

export default App