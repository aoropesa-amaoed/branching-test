function TodoForm() {
    return (
        <form className={'todo-form'}>
            <input type="text" placeholder={'What is the task today?'} className={'todo-input'} />
            <button className={'todo-btn'}>Add Task</button>
        </form>
    )
}

export default TodoForm;