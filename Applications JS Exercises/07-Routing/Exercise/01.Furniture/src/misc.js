export const accessToken = () => localStorage.getItem('accessToken');

export const setAccessToken = (accessToken, id) => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('userId', id);
};

export const getUserId = () => localStorage.getItem('userId');

export const isLoggedIn = () => accessToken() != null;

export const clearStorage = () => localStorage.clear();

export const containerElement = document.getElementById('container');

export const throwException = message => {
    alert(message);
    throw new Error(message);
};

const invalidInput = input => {
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
};
const validInput = input => {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
};

export const validator = {

    must_be_4_long: input => {
        const value = input.value;
        if (value.length < 4) {
            invalidInput(input);
        } else {
            validInput(input);
        }
    },

    must_be_between_1950_2050: input => {
        const value = input.value;
        if (value >= 1950 && value <= 2050) {
            validInput(input);
        } else {
            invalidInput(input);
        }
    },

    must_be_more_than_10: input => {
        const value = input.value;
        if (value.length < 10) {
            invalidInput(input);
        } else {
            validInput(input);
        }
    },

    must_be_positive_number: input => {
        const value = input.value;
        if (value <= 0) {
            invalidInput(input);
        } else {
            validInput(input);
        }
    },

    must_not_be_empty: input => {
        const value = input.value;
        if (!value) {
            invalidInput(input);
        } else {
            validInput(input);
        }
    }
};