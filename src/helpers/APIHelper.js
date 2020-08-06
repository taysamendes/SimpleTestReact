const swapi = 'https://swapi.dev/api';

export const doGet = (path) => {
    const url = `${swapi}${path}`
    return fetch(url).then(response => response.json());
};

export const getIdFromUrl = (url) => {
    const matches = url.match(/\/([0-9]{1,})\//);
    
    return matches && matches[1] ? matches[1] : null;
};
