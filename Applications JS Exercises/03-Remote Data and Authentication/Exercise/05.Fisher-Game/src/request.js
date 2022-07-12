export async function request(url, options) {
    try {
        const response = await fetch(url, options);

        if (response.ok != true) {
            const error = await response.json();
            throw new Error(error.message);
        }

        return response.status == 204 ? response : await response.json();

    } catch (error) {
        throw error;
    }
}