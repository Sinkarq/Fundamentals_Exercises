export const getInput = (form, item) => {
    const formData = new FormData(form);
    return formData.get(item);
};