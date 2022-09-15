export const accessToken = () => localStorage.getItem('accessToken');

export const isLoggedIn = () => accessToken() != null;