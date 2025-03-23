import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
    const [input,setInput] = useState("");
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault()

        dispatch(addTodo({todo:input}));// we will make changes on the store using useDispatch through reducer
        setInput("")
    }

  return (
    <form onSubmit={addTodoHandler}>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button type="submit">ADD-TODO</button>
    </form>
  )
}

export default AddTodo