import {useEffect, useState} from 'react';
import './App.css'
import TodoItem from './components/TodoItem.jsx';
import {createTodo, deleteTodo, getAllTodos, changeStateTodo} from "./services/TodoService.js";

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await getAllTodos();
            if (response.ok) {
                setTodos(await response.json());
            }
        })();
    }, []);


    const addTodoOnBlurHandler = async (e) => {
        e.persist();
        const text = e.target.value;
        if (text) {
            const response = await createTodo(text);
            if (response.ok) {
                const todo = await response.json();
                setTodos(todos =>
                    [
                        ...todos,
                        todo
                    ]);
                e.target.value = '';
            }
        }
    };

    const onDeleteTodoHandler = async (id) => {
        const response = await deleteTodo(id);
        if (response.ok) {
            setTodos(todos => todos.filter(todo => todo.id !== id));
        }
    };

    const changeStateTodoHandler = async (id) => {
        const response = await changeStateTodo(id);
        if (response.ok) {
            setTodos(todos => todos.map(todo => todo.id === id ? {...todo, isFinished: !(todo.isFinished)} : todo));
        }
    }

    return (
        <div className="App">
            <label htmlFor="todo-input">Create input: </label>
            <input id="todo-input" type="text" name="todo" onBlur={async (e) => await addTodoOnBlurHandler(e)}/>
            <ul>
                {todos.map((todo) => <TodoItem onClickHandler={changeStateTodoHandler} key={todo.id} onDelete={onDeleteTodoHandler} todo={todo}/>)}
            </ul>
        </div>
    );
}

export default App
