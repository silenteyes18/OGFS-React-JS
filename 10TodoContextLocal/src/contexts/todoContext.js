import { createContext, useContext } from "react";

export const todoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo message",
            completed: false
        }
    ],
    addTodo: (todo)=>{},
    updateTodo: (id, todo)=>{},
    deleteTodo: (id)=>{},
    toggleCompleted: (id)=>{},
});

export const TodoProvider = todoContext.Provider;

export const useTodoContext = () => {
    return useContext(todoContext);
} 