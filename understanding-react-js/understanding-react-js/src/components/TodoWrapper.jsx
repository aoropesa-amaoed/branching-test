
import React, { useState } from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoWrapper() {
    const [todos, setTodos] = useState([]);

    function addTodo(todo) {
        setTodos((prevState) => {
            const newTodo = {
                id: Math.random() * 100,
                task: todo,
                isCompleted: false
            }
            return [...prevState, newTodo]
        })
    }

    function completeTaskHandler(id) {
        setTodos(
            todos.map((todo) => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)
        )
    }

    function deleteTodo(id) {
        setTodos(todos.filter((todo) => todo.id !== id))
    }


    return (
        <div className={'todo-wrapper'}>
            <h1>Get Things Done</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo) =>
                <Todo
                    key={todo.id}
                    todoData={todo}
                    completeTaskHandler={completeTaskHandler}
                    deleteTodo={deleteTodo} />)}
        </div>
    )
}

export default TodoWrapper;