export default function getIdByURL(url){
    const removeURL = url.replace('https://pokeapi.co/api/v2/pokemon/','');
    const id = removeURL.replace('/','');

    return id;
}