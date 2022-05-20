function validate() {
    const inputField = document.querySelector(`input`);
    // <name>@<domain>.<extension>
    inputField.addEventListener('change', () => {
        try {
            const value = inputField.value;

            if (value.toLowerCase() != value) {
                throw Error('All characters of input should be in lowercase');
            }

            const [name, domainLink] = value.split(`@`);
            const [domain, extension] = domainLink.split('.');
            inputField.value = name;
            inputField.className = '';
        }
        catch (e) {
            console.log(e);
            inputField.className = 'error';
        }

    })
}