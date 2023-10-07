import React, { useState } from 'react';

function TodoForm(props) {
    const [value, setValue] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        if (value) {
            props.addTodo(value)
            setValue('')
        }
    }

    function handleInputChange(e) {
        setValue(e.target.value)
    }
    return (
        <form className={'todo-form'} onSubmit={handleSubmit}>
            <input type="text" value={value} placeholder={'What is the task today?'} className={'todo-input'} onChange={handleInputChange} />
            <button className={'todo-btn'} type="submit">Add Task</button>
        </form>
    )
}

export default TodoForm;