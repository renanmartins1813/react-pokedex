export default function getInfo(){
    let info = '';
    for(let i = 0; i < arguments[0].length; i++){
        const lang = arguments[0][i].language.name;

        if(lang == 'en'){
            info = arguments[0][i].flavor_text;
            break;
        }
    }

    return info;
}