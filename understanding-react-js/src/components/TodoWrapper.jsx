
import React, { useState } from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoWrapper() {
    const [todo, setTodo] = useState([]);

    function addTodo(todo) {
        setTodo((prevState) => {
            const newTodo = {
                task: todo,
                completed: false
            }
            return [...prevState, newTodo]
        })
    }


    console.log(todo)

    return (
        <div className={'todo-wrapper'}>
            <h1>Get Things Done</h1>
            <TodoForm addTodo={addTodo} />
            {todo.length > 0 && <Todo task={todo[0].task} />}
        </div>
    )
}

export default TodoWrapper;