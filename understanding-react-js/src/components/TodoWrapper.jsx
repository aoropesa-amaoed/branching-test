
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoWrapper() {
    return (
        <div className={'todo-wrapper'}>
            <h1>Get Things Done</h1>
            <TodoForm />
            <Todo />
        </div>
    )
}

export default TodoWrapper;