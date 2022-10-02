import { useState } from 'react'
import './App.css'
import TodoItem from './components/TodoItem.jsx';

function App() {
    const [todos, setTodos] = useState([
        {id: '1', text: 'Hello World'},
        {id: '2', text: 'World'},
    ]);

    const addTodoOnBlurHandler = (e) => {
        setTodos(todos =>
            [
                ...todos,
                {id: todos.length + 1, text: e.target.value}
            ]);
    };

    return (
        <div className="App">
            <label htmlFor="todo-input">Create input: </label>
            <input id="todo-input" type="text" name="todo" onBlur={addTodoOnBlurHandler}/>
            <ul>
                {todos.map((todo) =>
                    <TodoItem key={todo.id}>
                        {todo.text}
                    </TodoItem>)}
            </ul>
        </div>
    );
}

export default App
