import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, todo: "hello world"}],
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:{
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                todo: action.payload.todo,
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload.id? {...todo,todo: action.payload.todo} : todo)
        }
    }
})

export default todoSlice.reducer;

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;