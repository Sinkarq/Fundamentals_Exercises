export const accessToken = () => localStorage.getItem('accessToken');

export const setAccessToken = accessToken => localStorage.setItem('accessToken', accessToken);

export const isLoggedIn = () => accessToken() != null;

export const containerElement = document.getElementById('container');

export const throwException = message => {
    alert(message);
    throw new Error(message);
};