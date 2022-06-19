export async function request(url, options) {
    try {
        const response = await fetch(`${url}`, options);

        if (response.ok != true && response.status != 403 && response.status == 409) {
            const error = await response.json();
            throw new Error(error.message);
        }

        return response.status == 204 || response.status == 403 || response.status == 409 ? response : await response.json();

    } catch (error) {
        throw error;
    }
}