const BASE_URL = 'https://localhost:7255';

export const getAllTodos = async () => {
    const response = await fetch(`${BASE_URL}/Todos`);

    return response;
};

export const createTodo = async (text) => {
    const response = await fetch(`${BASE_URL}/Todos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({text: text, isFinished: false})
    });

    return response;
}

export const deleteTodo = async (id) => {
    const response = await fetch(`${BASE_URL}/Todos/${id}`, {method: 'DELETE'});

    return response;
}

export const changeStateTodo = async (id) => {
    const response = await fetch(`${BASE_URL}/Todos/ChangeState/${id}`, {method: 'PUT'});

    return response;
}