import React from 'react'
import { useTodoContext } from '../contexts/todoContext';

function TodoForm() {

    const [todo, setTodo] = React.useState('')

    const {addTodo} = useTodoContext();
    const onFormSubmit = (e) => {
        e.preventDefault();
        if (!todo) return;
        addTodo({todo, completed : false});
        setTodo('');
    }
  return (
    <form onSubmit={onFormSubmit} className='flex gap-2'> 
        <input type="text" placeholder='add todo' value={todo} onChange={(e) => setTodo(e.target.value)}/>
        <button className='bg-orange-500 px-2 py-1' type="submit" >Add Todo</button>
    </form>
  )
}

export default TodoForm