export default function handleID(id){
    if(id <= 9){
        return '00' + id;
    }

    if(id <= 99){
        return '0' + id;
    }

    return id;
}