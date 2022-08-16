export default function handleName(string){
    if(string == undefined) return ''

    const regex = /(\b[a-z](?!\s))/g;
    const upperCaseString = string.replace(regex, x=> x.toUpperCase());
    const removeDash = upperCaseString.replace(/-/g, ' ')

    return removeDash;
}