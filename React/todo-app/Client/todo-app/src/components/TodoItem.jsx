import styles from './TodoItem.module.css';

export default function TodoItem({
    children
}) {
    return (
        <li className={styles['li-item']}>
            {children}
            <button>Delete</button>
        </li>
    );
}