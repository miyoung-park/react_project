import React from "react";

const TodoList = ({todos}) => {


    const todoList = todos && todos.map( (todo, idx) =>
        <li key={idx}>{todo}</li>
    );

    return (
        <ul>
            {todoList}
        </ul>
    )
}

export default TodoList;