import TodoList from "./TodoList";
import {useState,useEffect} from "react";

const TodoApp = () => {

    const [ todos, setTodos ] = useState(['react 공부']);
    const [ newTodo, setNewTodo ] = useState();

    const changeInput = (e) => {
        setNewTodo( e.target.value );
    }
    const addTodoList = (e) => {
        e.preventDefault();
        setTodos( [...todos, newTodo])
    }

    useEffect(() => {
       console.log( "새로운 내용이 랜더링 됐네요." , todos );
    }, [todos] );


    useEffect(() => {

    })

    const fetchInitialData = async () => {
        const response = await fetch("http://localhost:9094/")
    }

    return (
        <div>
            <h3> TODO LIST </h3>
            <form action="">
                <input type="text" name="" onChange={ changeInput }/>
                <button onClick={ addTodoList }>todo++</button>
            </form>

            <TodoList todos={todos}/>
        </div>
    )
}

export default TodoApp;