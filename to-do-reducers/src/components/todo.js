import React from "react";
import "./Todo.css";
const Todo = props => {
    return (
        <div
            onClick={() => props.toggleCompleted(props.todo.id)}
            className={`todo${props.todo.completed ? ' completed' : ''}`}
            >
                <p>{props.todo.item}</p>
        </div>
    );
};



export default Todo;