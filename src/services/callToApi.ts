
const url = 'https://api.github.com/repositories';

export const getRepos = (name?: string) => {
    return fetch(url)
    .then((response)=> response.json())
    .then((response)=> {
        //Datos a mostrar : name, description, url, owner.login, owner.url, 
        console.log(response);
    })
};