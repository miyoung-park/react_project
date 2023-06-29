import React from "react";

const TodoList = ({todos}) => {
    const deleteTodo = (e) => {
        console.log(e.key)
    }

    const todoList = todos && todos.map( (todo, idx) =>
        <li key={idx}>
            {todo}<a onClick={ deleteTodo }>X</a>
        </li>
    );

    return (
        <ul>
            {todoList}
        </ul>
    )
}

export default TodoList;