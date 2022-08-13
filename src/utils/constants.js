export const PK_LIST_URL = (current) => `https://pokeapi.co/api/v2/pokemon?offset=${current}&limit=15`;
export const SINGLE_PK_URL = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;