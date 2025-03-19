import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider} from './contexts/todoContext.js'
import { TodoForm, TodoList } from './components';

function App() {

  const [todos, setTodos] = useState([]);

const addTodo = (todo) =>{
  setTodos((prevTodos) => [{id: Date.now(), ...todo}, ...prevTodos])
}

const updateTodo = (id, todo) => {
  setTodos((prev)=> prev.map((t) => t.id === id ? todo : t))
}

const deleteTodo = (id) => {
  setTodos((prev) => prev.filter((t) => t.id !== id))
}

const toggleCompleted = (id) => {
  setTodos((prev) => prev.map( (t) => t.id === id ? {...t, completed: !t.completed} : t))
}

useEffect(() => {
  const todosLocal = JSON.parse(localStorage.getItem("todos"));
  if(todosLocal && todosLocal.length > 0){
    setTodos(todosLocal);
    console.log(todosLocal)
  }
},[])

useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos));
},[todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleCompleted}}>
      <div className='flex flex-col gap-5 m-10'>
        <div className='bg-slate-700 p-5'>
          <TodoForm/>
        </div>
        <div>
        {
        todos.map((todo) => {
          return (<div key={todo.id} className='bg-slate-500 p-5 flex justify-center'>
            {console.log("1-app")}
            <TodoList todo={todo}/>
          </div>)
        })
      }
        </div>      
      </div>
    </TodoProvider>
  )
}

export default App
