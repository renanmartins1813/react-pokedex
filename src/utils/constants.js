export const PK_LIST_URL = ({offset, limit}) => `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
export const SINGLE_PK_URL = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;