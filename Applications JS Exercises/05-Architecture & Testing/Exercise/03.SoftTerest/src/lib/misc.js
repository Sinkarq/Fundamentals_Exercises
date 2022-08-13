export const newException = message => {
    alert(message);
    throw new Error(message);
};

export const isLogged = () => {
    if (accessToken()) {
        return true;
    }

    return false;
};

export const accessToken = () => localStorage.getItem('accessToken');