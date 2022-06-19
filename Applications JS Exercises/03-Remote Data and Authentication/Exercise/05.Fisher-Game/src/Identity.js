export function IsLoggedIn() {
    if (localStorage.getItem('accessToken') === null) {
        return false;
    }

    return true;
}