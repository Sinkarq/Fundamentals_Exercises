export const throwException = message => {
    alert(message);
    throw new Error(message);
};