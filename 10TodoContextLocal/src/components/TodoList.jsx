import React from 'react'
import { useState } from 'react'
import { useTodoContext } from '../contexts/todoContext';

function TodoList({todo}) {
    console.log("3-Tlist")
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoValue, setTodoValue] = useState(todo.todo);
    const [isTodoCompleted, setIsTodoCompleted] = useState(todo.completed);

    const {updateTodo, deleteTodo, toggleCompleted} = useTodoContext();
     const editTodo = () => {
        updateTodo(todo.id, {...todo,todo :todoValue});
        setIsTodoEditable(false)
     }

     const toggleComplete = () =>{
        toggleCompleted(todo.id)
     }

     const deletingTodo = () => {
        deleteTodo(todo.id);
        // toggleCompleted(todo.id);
     }

  return (
    <div className='flex gap-2'>
        {console.log("2-Tlist")}
        <input type="checkbox" checked={todo.completed} onChange={toggleComplete}/>
        <input type="text" readOnly={!isTodoEditable} value={todoValue} onChange={(e)=>setTodoValue(e.target.value)} className={`${isTodoEditable? "border-2 border-gray-900" : "outline-none "}`}/>
        <button className='bg-blue-500 px-2 py-1' disabled={todo.completed} 
        onClick={() => {
            if (todo.completed) return
            if (isTodoEditable) {
                editTodo()
            }else setIsTodoEditable((prev) => !prev)
        }}
        >{isTodoEditable ? "SAVE" : "EDIT"}</button>
        <button className='bg-red-500 px-2 py-1' onClick={deletingTodo}>Delete</button>
    </div>
  )
}

export default TodoList