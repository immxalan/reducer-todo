import React, { useReducer } from "react";
import { todoListReducer, initialState } from "../reducers/TodoListReducer";
import TodoForm from "./TodoForm";
import TodoList from "./todolist";

export const TodoComplete = () => {
 const [state, dispatch]   = useReducer(todoListReducer, initialState);
 console.log(state, dispatch);

const addItem = newItemText => dispatch({type: "ADD_TODO", text: newItemText});

const toggleCompleted = id => dispatch({type: "TOGGLE_COMPLETED", id: id});

const clearCompleted = () => dispatch({type: "CLEAR_COMPLETED"});

 return (
     <div>
         <TodoForm addItem={addItem}/>
         <TodoList clearCompleted={clearCompleted} toggleCompleted={toggleCompleted} todo={state.todo}/>
     </div>
 )
}