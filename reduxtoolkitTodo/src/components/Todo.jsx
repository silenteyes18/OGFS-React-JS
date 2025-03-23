import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice';

function Todo() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
  return (
    <div>
        <ul>
        {todos.map((todo) => (
            <li key={todo.id}>
                {todo.todo}
                <button onClick={() => dispatch(removeTodo({id:todo.id}))}>X</button>
            </li>
        ))
        }
        </ul>
    </div>
  )
}

export default Todo