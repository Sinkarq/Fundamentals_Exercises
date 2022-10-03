import styles from './TodoItem.module.css';

export default function TodoItem({
    todo,
    onDelete,
    onClickHandler
}) {
    console.log(todo);
    return (
        <li className={todo.isFinished ? styles.finishedTodo : ''}>
            {todo.text}
            <button onClick={async () => await onDelete(todo.id)}>Delete</button>
            <button onClick={async () => await onClickHandler(todo.id)}>Change State</button>
        </li>
    );
}