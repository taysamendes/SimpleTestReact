const swapi = 'https://swapi.dev/api';

export const doGet = (path) => {
    const url = `${swapi}${path}`
    return fetch(url).then(response => response.json());
};

