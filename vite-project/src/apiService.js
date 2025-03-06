const API_BASE_URL = "https://rickandmortyapi.com/api";


export const getResource = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
    } catch (error) {
    console.error("Error fetching resource:", error);
    throw error;
    }
};

export const getRandomCharacter = async () => {
    const randomId = Math.floor(Math.random() * 671) + 1;
    const url = `${API_BASE_URL}/character/${randomId}`;
    return await getResource(url);
};

export const getCharacters = async (name, status) => {
    const url = `${API_BASE_URL}/character/?name=${name}&status=${status}`;
    return await getResource(url);
};