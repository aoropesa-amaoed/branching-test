function TodoForm(props) {

    function handleSubmit(e) {
        e.preventDefault();
        props.addTodo()
    }
    return (
        <form className={'todo-form'} onSubmit={handleSubmit}>
            <input type="text" placeholder={'What is the task today?'} className={'todo-input'} />
            <button className={'todo-btn'} type="submit">Add Task</button>
        </form>
    )
}

export default TodoForm;