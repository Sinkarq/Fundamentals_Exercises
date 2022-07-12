const host = 'http://localhost';
const port = 3030;

export async function request(url, options) {
    try {
        const response = await fetch(`${host}:${port}${url}`, options);

        if (response.ok != true && response.status != 403 && response.status == 409) {
            const error = await response.json();
            throw new Error(error.message);
        }

        return response.status == 204 || response.status == 403 || response.status == 409 ? response : await response.json();

    } catch (error) {
        throw error;
    }
}

export async function getMovies() {
    const movies = await request(`/data/movies`);

    return movies;
}

export async function createMovie(title, description, img, accessToken) {
    await request('/data/movies', {
        method: 'POST',
        headers: {
            'X-Authorization': accessToken,
            'content-type': 'application/json'
        },
        body: JSON.stringify({title, description, img})
    });
}

export async function getMovie(id) {
    const movie = await request(`/data/movies/${id}`);

    return movie;
}

export async function getMovieLikesCount(movieId) {
    const likes = await request(`/data/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`);

    return likes;
}

export async function deleteMovie(movieId, accessToken) {
    await request(`/data/movies/${movieId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': accessToken
        }
    });
}

export async function editMovie(movieId, title, description, img, accessToken) {
    await request(`/data/movies/${movieId}`, {
        method: 'PUT',
        headers: {
            'X-Authorization': accessToken,
            'content-type': 'application/json'
        },
        body: JSON.stringify({title, description, img})
    });
}

export async function likeMovie(movieId, accessToken) {
    await request(`/data/likes`, {
        method: 'POST',
        headers: {
            'X-Authorization': accessToken,
            'content-type': 'application/json'
        },
        body: JSON.stringify({movieId})
    });
}