export default async function request(url){
    return await (await fetch(url)).json();
}