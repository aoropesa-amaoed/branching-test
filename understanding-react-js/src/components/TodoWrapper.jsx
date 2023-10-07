
import React, { useState } from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoWrapper() {
    const [todo, setTodo] = useState([]);

    function addTodo(todo) {
        console.log('im clicked!')
        // setTodo((prevState) => {
        //     const newTodo = {
        //         task: todo,
        //         completed: false
        //     }
        //     return [...prevState, newTodo]
        // })
    }

    return (
        <div className={'todo-wrapper'}>
            <h1>Get Things Done</h1>
            <TodoForm addTodo={addTodo} />
            <Todo />
        </div>
    )
}

export default TodoWrapper;