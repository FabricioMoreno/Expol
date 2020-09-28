export default function(jsonLink){  
    return fetch(jsonLink)
    .then(data =>data.json())
}